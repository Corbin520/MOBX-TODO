import React from 'react';
import ReactDOM from 'react-dom';
import {TodoRootStore} from "./todos/TodoRootStore";
import {TodoApp} from "./todos/TodoApp";


const myRoot = TodoRootStore.create();

window.root = myRoot;

ReactDOM.render(<TodoApp rootStore={myRoot}/>, document.getElementById('foo'));

