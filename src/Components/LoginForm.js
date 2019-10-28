import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <>
        <div id="login-form">
          <input id="email-input" placeholder="Email" name="email" onChange={this.props.inputChangeHandlerProps}></input>
          <input id="password-input" placeholder="Password" name="password" onChange={this.props.inputChangeHandlerProps}></input>
          <button onClick={this.props.handleLoginProps} id="submit-login-form">Submit</button>
        </div>
      </>
    )
  }
}

export default LoginForm