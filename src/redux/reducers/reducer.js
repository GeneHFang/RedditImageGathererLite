//default values
const defaultState = {

}

//Reducer
const reducer = (prevState = defaultState, action) => {
    switch(action.type){
        //case format example
        //case "EX":
        //  return {...prevState, exampleKey: action.payload}
        default:
            return prevState;
    };
};

export default reducer;