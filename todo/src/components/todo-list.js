import React from 'react';

import TodoLIstItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoLIstItem/></li>
            <li><TodoLIstItem/></li>
        </ul>
    );
};
export default TodoList;