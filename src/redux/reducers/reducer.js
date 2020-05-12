//default values
const defaultState = {

    //String subreddit title. Default subreddit is r/all
    subreddit: "all",

    //Array of image objects containing info from first 25 image/gif/video posts 
    images: [],
}

//Reducer
const reducer = (prevState = defaultState, action) => {
    switch(action.type){
        //case format example
        //case "EX":
        //  return {...prevState, exampleKey: action.payload}

        //Change subreddit to 
        case "CHANGE_SUBREDDIT":
            return {...prevState, subreddit: action.payload.subredditName};
        
        //Update the array of images
        case "UPDATE_ARRAY":
            return {...prevState, images: action.payload.images}

        //default case
        default:
            return prevState;
    };
};

export default reducer;