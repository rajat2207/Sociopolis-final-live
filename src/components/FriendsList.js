import React from 'react';
import { FriendListItem } from './';

const FriendsList = (props) => {
  return (
    <div className="friends-list">
      <div className="header">Friends</div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No Friends Found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendListItem friend={friend.to_user} key={friend._id} />
        ))}
    </div>
  );
};

export default FriendsList;
