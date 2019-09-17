// Bringing in our rootStore file
import {TodoRootStore} from './TodoRootStore'
// Importing React
import React from 'react';

// 
import {useObserver} from "mobx-react-lite";


// What is observer and why do we use it??
export const TodoListItem = ({todo}) => {
    return useObserver( () => {
        // if the todo is done, put a line through the item
        const  listStyle = todo.done ? {
            textDecoration: 'line-through'
        }: {};
        
        // this <li> is what displays the todo item after its created
        return <li style={listStyle} key={todo.id}>{todo.description}</li>
    })
};


// Here we will be displaying the text or the web page info (what the user can see)

export const TodoApp = ({rootStore}) => {
    return useObserver( () => {
        return (<>
        
            <h1>Hello, you have {rootStore.numberOfTodos} todos to complete today:</h1>
            <ul>
                {rootStore.todos.map( todo => <TodoListItem todo={todo}/>)}
            </ul>
            
            <input  value={rootStore.todoEntry} onChange={e => rootStore.setTodoEntry(e.target.value)}/>
            <button onClick={()=> rootStore.addTodo({id: 1, description: rootStore.todoEntry})}> Add TODO</button>
                
        </>)
    })
};

// Dig into "rootStore" because its in the index.js file.

    // Rootstore is a way to get out of the TodoApp() function which then can access anything from ./TodoRootStore
    // because its imported at the top


// line 27: Is displaying text as well as using JSX to inject our JS function from TodoRootStore
    // that gets and returns the amount of todos there are in the array.

// line 28 - 30: Is mapping through our todos array and then displaying each todo as a <ul>

// line 32: 

// line 33: Here we have a button with an "onClick" event. The on click event is taking a function
    // then going to the "addTodo()"" function on the "rootstore" file which can be accessed using
    // the "rootStore". Its passing the addTodo() function two peramiters. First its getting an "id:"
    // as well as setting our "description:" to the text that is entered into the input field

