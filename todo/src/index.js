import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Drink coffee</li>
            <li>Make Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1> My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Anything search';
    return <input placeholder={ searchText } />;
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};


// const el = <h1>Hello World</h1>;
// const el = React.createElement(
//     'h1', null, 'Hello World');


ReactDOM.render(<App />, document.getElementById('root'));