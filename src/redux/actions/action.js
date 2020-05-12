
/**
 * Changes the subreddit where images that are being displayed are fetched from
 * @param {String} newSubreddit 
 */
export const changeSubreddit = (newSubreddit) => {
    return {
        type: "CHANGE_SUBREDDIT",
        payload: {
            subredditName: newSubreddit,
        },
    };
};

/**
 * Updates the displayed array of image objects.
 * Construction of array is handled when info is fetched  
 * @param {Array} newArray 
 */
export const updateArray = (newArray) => {
    return{
        type: "UPDATE_ARRAY",
        payload: {
            images: newArray,
        },
    };
};