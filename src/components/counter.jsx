import React, { Component } from 'react';

class Counter extends Component {
    state = {  //it's an obj that contains any data the component needs
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    style = { // its properties are CSS properties in cameCase
        fontSize: 20,
        fontWeight: 'bold'
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>no tags!</p>;
        else return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    }
    
    //event handling: we use arrow functions because otherwise we need 
    //to create a contructor() with super()
    //and tell React about the changes with setState()
    handleIncrement = () => {
        this.state.count++;
        this.setState({ coun: this.state.count + 1 });
    }

    render() { 
        return (
            <React.Fragment>
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement.bind(this)} className="btn btn-secondary btn-sm">increment</button>
                {this.renderTags()}
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
