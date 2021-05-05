import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //This binding is necessary to provide a context for this in the callback.
    // this.handleClick = this.handleClick.bind(this);
  }

  //Use this syntax to avoid using the bind everytime.
  handleClick = () => {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
