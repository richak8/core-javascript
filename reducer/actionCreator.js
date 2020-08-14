//An action creator is a function that creates and returns an action object. 

const actionCreator = type => payload => ({
    type,
    payload
})