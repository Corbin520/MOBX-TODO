import { types, Instance } from 'mobx-state-tree';

// createing a model
const Card = types.model({
    // set up our model
    id: id,
    text: types.string,
    completed: false
})


export default Card;
