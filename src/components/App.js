import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList,Navbar } from './';


const Login = () => (
  <div>Login</div>
);

const Home = () => <div>Home</div>;

const SignUp = () => <div>SignUp</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        {/* This will the react router that this is the root application */}
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          <ul>
            <li>
              {/* We are not using thethe a tag because providing the href to the a tag will refresh the page again */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
