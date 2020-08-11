import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup, Settings } from './';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

const PrivateRoute = (privateRouteProps) => {
  const {
    isLoggedIn,
    path,
    component: Component /*renaming component to Component*/,
  } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = getAuthTokenFromLocalStorage();

    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { isLoggedIn } = this.props.auth;
    return (
      <Router>
        {/* This will the react router that this is the root application */}
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedIn={isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(App);
