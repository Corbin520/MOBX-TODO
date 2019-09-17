// importing types so that we can use it on our model
import {types} from "mobx-state-tree";

// export this model so it can be used on another file
export const TodoItem = types.model({
    id: types.identifierNumber,
    description: types.string,
    done: false

    // Actions is what will update or the action the model will take when it runs.
    // Its the only way to update the state
}).actions( self => ({

    // This function will mark if the todo is done or not. It will change done from
    // its default "false" to "true"
    markAsDone(){
        self.done = true;
    },

    // This function will toggle the button or item to SHOW done or not done (visual function)
    toggleDone(){
        self.done = !self.done;
    },

    // This function will take the description (what the user puts in the input field) and store
    // it to newDescription
    changeDescription(newDescription){
        self.description = newDescription;
    }
}));


// Starting from the top:

    // We are building out a model to store our state. In the model we have all of the state items
    // we need to store the information. ID: so that we can keep track of each todo, Description:
    // that will handle what the input field is, Done: will determin if the item is done or not.
        
    // We then create an action on our model
        // The action is what modifys the state. By calling all of the functions in action, it will update
        // each piece of our model.

    // We can export our model now because we are using export on the actualy model which will alow us to
    // take anything with export next to it from this page by calling it in another file. In our case, we
    // are exporting this file to the "TodoRootStore.js"



