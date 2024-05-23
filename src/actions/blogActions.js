//postsData is an array of posts imported from post.js file
import postsData from "../Data/post";

// A Basic format for an action
export const fetchposts = () => async(dispatch) => {
    dispatch({ type: "FETCH_POST_START" });
    try {
        // Assuming postsData is the array of posts directly
        dispatch({ type: "FETCH_POST_SUCCESS", payload: postsData });
    } catch (err) {
        dispatch({ type: "FETCH_POST_FAIL", payload: err });
    }
}


