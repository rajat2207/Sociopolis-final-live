import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS', this.props);
    return (<div className="App">App</div>)
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const connectedAppComponent=connect(mapStateToProps)(App)

export default connectedAppComponent;


