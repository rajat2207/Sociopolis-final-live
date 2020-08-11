import React, { Component } from 'react';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';

class UserProfile extends Component {
  componentDidMount() {
    const { match } = this.props;

    //params are present in the match section of props
    if (match.params.userId) {
      //dispatch an action
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const { user, inProgress } = this.props.profile;
    if (inProgress) {
      return <div class="loader"></div>;
    }
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-label">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-label">{user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(UserProfile);
