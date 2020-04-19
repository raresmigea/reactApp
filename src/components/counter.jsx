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
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
