import React, { Component } from 'react';

import { PostsList, Chat } from './';
import FriendsList from './FriendsList';

class Home extends Component {
  render() {
    const { isLoggedIn, friends } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList />
        {isLoggedIn && <FriendsList friends={friends} />}
        {isLoggedIn && <Chat />}
      </div>
    );
  }
}

export default Home;
