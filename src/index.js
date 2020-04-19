import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter  from './components/counter';

const element = <h1>Hello world</h1>;

ReactDOM.render(<Counter />, document.getElementById('root')); //1st: elemnt, 2nd: where in DOM to render it
