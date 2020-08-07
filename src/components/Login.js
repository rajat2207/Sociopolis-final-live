import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    //we are creating a reference to the input feilds to handle it in the DOM that is to handle the form using uncontrolled components
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    //here we are handling the input feilds using the state and hence are called the controlled components
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordINputRef', this.passwordInputRef);
    console.log('this.state', this.state);
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;