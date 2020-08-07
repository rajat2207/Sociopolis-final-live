import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        //we are creating a reference to the input feilds to handle it in the DOM
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('this.emailInputRef', this.emailInputRef);
        console.log('this.passwordINputRef', this.passwordInputRef);
    }

    render() {
        return (
          <form className="login-form">
            <span className="login-signup-header">Log In</span>
            <div className="field">
              <input
                type="email"
                placeholder="Email"
                required
                ref={this.emailInputRef}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                ref={this.passwordInputRef}
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