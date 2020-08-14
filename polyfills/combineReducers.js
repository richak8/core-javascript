/*
- The combineReducers helper function turns an object whose values are 
different reducing functions into a single reducing function you can pass 
to createStore.
- The resulting reducer calls every child reducer, and gathers their results 
into a single state object. 
- The state produced by combineReducers() namespaces the states of each 
reducer under their keys as passed to combineReducers()
- Arguments:- reducers (Object): An object whose values correspond 
to different reducing functions that need to be combined into one
- Returns:- (Function): A reducer that invokes every reducer inside the
reducers object, and constructs a state object with the same shape.
*/

const combineReducers = reducers => (state = {}, action) => {
    Object.keys(reducers).reduce((nextState, key) => {
        action.key = key;
        nextState[key] = reducers[key](
            state[key],
            action
        )
        return nextState;
    }, {});
}