import React, { Component } from 'react';

class Counter extends Component {
  state = {
    //it's an obj that contains any data the component needs
    count: 0,
  };

  style = {
    // its properties are CSS properties in cameCase
    fontSize: 20,
    fontWeight: 'bold',
  };

  //event handling: we use arrow functions because otherwise we need
  //to create a contructor() with super()
  //and tell React about the changes with setState()
  handleIncrement = () => {
    this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
