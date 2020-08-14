/*
- bindActionCreators(actionCreators, dispatch)
- Returns
*/

const bindActionCreator = (ac, dispatch) => () => 
   dispatch(ac.apply(this, arguments));

const bindActionCreators = (actionCreators, dispatch) => {
    const keys = Object.keys(actionCreators);
    const bindedActions = {};
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let ac = actionCreators[key];
        bindedActions[key] = bindActionCreator(ac, dispatch);
    }
    return bindedActions;
}