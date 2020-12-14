import React, { Component } from 'react';

class Counter extends Component {
  style = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  // this method is called after a component is updated (new state/props)
  // compares old one with new one.
  // if there is a change:
  // it could request data from the server

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // could perform a call to the server
    }
  }

  // this method is called before a component is removed from the DOM
  // gives opportunities for any type of cleanup before removal
  // otherwise could have memory leaks

  componentWillUnmount() {
    console.log('Counter: Unmount');
  }

  render() {
    console.log('Counter: Rendered');
    return (
      <div>
        {this.props.children}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
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
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
