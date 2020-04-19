import React, { Component } from 'react';

class Counter extends Component {
    state = {  //it's an obj that contains any data the component needs
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
     };

     style = { // its properties are CSS properties in cameCase
        fontSize: 20,
        fontWeight: 'bold'
     };

    render() { 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
