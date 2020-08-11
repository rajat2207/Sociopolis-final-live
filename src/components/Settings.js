import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, clearAuthState } from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
      issue: '',
    };
  }

  handleChange = (feildName, value) => {
    this.setState({
      [feildName]: value,
    });
  };

  handleSave = () => {
    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;

    if (name === '') {
      this.handleIssue('Name Feild is Empty');
      return;
    }

    if (password === '') {
      this.handleIssue('Password Feild is Empty');
      return;
    }

    if (password !== confirmPassword) {
      this.handleIssue(`Passwords don't match`);
      return;
    }

    this.handleIssue('');
    
    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  handleIssue = (issue) => {
    this.setState({
      issue,
    });
  };

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  render() {
    const { user, error } = this.props.auth;
    const { editMode, issue } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dialog">{error}</div>}
        {error === false && (
          <div className="alert success-dialog">
            Profile Successfully Updated!
          </div>
        )}
        {issue.length > 0 && <div className="alert error-dialog">{issue}</div>}
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}

          {editMode && (
            <div className="field">
              <div className="field-label">New Password</div>
              <input
                type="password"
                onChange={(e) => this.handleChange('password', e.target.value)}
                value={this.state.password}
              />
            </div>
          )}

          {editMode && (
            <div className="field">
              <div className="field-label">Confirm Password</div>
              <input
                type="password"
                onChange={(e) =>
                  this.handleChange('confirmPassword', e.target.value)
                }
                value={this.state.confirmPassword}
              />
            </div>
          )}

          <div className="btn-grp">
            {editMode ? (
              <button className="button save-btn" onClick={this.handleSave}>
                Save
              </button>
            ) : (
              <button
                className="button edit-btn"
                onClick={() => this.handleChange('editMode', true)}
              >
                Edit Profile
              </button>
            )}

            {editMode && (
              <div
                className="go-back"
                onClick={() => this.handleChange('editMode', false)}
              >
                Go Back
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Settings);
