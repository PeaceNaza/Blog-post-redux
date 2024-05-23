import axios from "axios";

//A Basic format for a action 
export const fetchposts = () => async(dispatch) => {
    dispatch({type: "FETCH_POST_START"})
    try {
      const res = await axios.get("../../post.json") 
      dispatch({type: "FETCH_POST_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({type: "FETCH_POST_FAIL", payload: err})
    }
} 

