// importing types so we can use it in our model
import {types} from "mobx-state-tree";
// Importing TodoItem (our model from our Todo item file)
import {TodoItem} from "./TodoItem";


// Creating another model
export const TodoRootStore = types.model({

    // todoEntry: is what entry text is from the input box
    todoEntry: '',

    // todos: will be an array that will hold the users todos
    todos: types.optional(types.array(TodoItem), [])
})
// 
.views(self => ({
    get numberOfTodos() {
        // This is returning how many todos are in the array
        // It is also displated on the page counting up.
        return self.todos.length;
    }
}))
    // creating an action on the model that will run two functions
    .actions(self => ({

        // pushing the todoItem to the todos array
        addTodo(todoItem) {
            self.todos.push(todoItem);
        },

        // todoEntry is now the newValue
        setTodoEntry(newValue) {
            self.todoEntry = newValue;
        }
    }));

    // The Rootstore is

    // this model will now be exported to the "TodoApp.jsx"


