import React from 'react';
import Greeting from './Greeting';

function LogInButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogOutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogInClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogOutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let button;
    const isLoggedIn = this.state.isLoggedIn;

    if (isLoggedIn) {
      button = <LogOutButton onClick={this.handleLogOutClick} />;
    } else {
      button = <LogInButton onClick={this.handleLogInClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} /> {button}{' '}
      </div>
    );
  }
}

export default LoginControl;
