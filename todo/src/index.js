import React from 'react';
import ReactDOM from 'react-dom';
const el = (
    <div>
        <h1> My Todo List</h1>
        <input placeholder="serch"/>
        <ul>
            <li>Drink coffee</li>
            <li>Make Awesome App</li>
        </ul>
    </div>
)





// const el = <h1>Hello World</h1>;
// const el = React.createElement(
//     'h1', null, 'Hello World');


ReactDOM.render(el, document.getElementById('root'));