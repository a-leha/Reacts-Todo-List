import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        { label: 'test1', important: false, id: 1 },
        { label: 'test2', important: true, id: 2 },
        { label: 'test3', important: true, id: 3 },
        { label: 'test4', important: false, id: 4 },
        { label: 'test5', important: false, id: 5 },
        { label: 'test6', important: true, id: 6 },
        { label: 'test7', important: false, id: 7 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('root'));