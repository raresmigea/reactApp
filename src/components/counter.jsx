import React, { Component } from 'react';

class Counter extends Component {
    state = {  //it's an obj that contains any data the component needs
        count: 0,
        imageUrl: 'https://picsum.photos/200'
     };
    render() { 
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""></img>
                <span>{this.formatCount()}</span>
                <button>increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
