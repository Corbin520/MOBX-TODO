import { types, Instance } from 'mobx-state-tree';

// createing a model
const Form = types.model({
    // set up our model
    id: id,
    text: types.string,
    add: false
})


export default Form;
