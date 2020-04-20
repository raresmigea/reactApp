import React, { Component } from 'react';

class Counter extends Component {
  state = {
    //it's an obj that contains any data the component needs
    value: this.props.counter.value,
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
    this.state.value++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
