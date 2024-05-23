const initialState = {
  posts: [],
  loading: true,
  error: null
}

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_START":
      return {...state, loading: true, error: null}
    case "FETCH_POST_SUCCESS":
      return {...state, loading: false, posts: action.payload}
    case "FETCH_POST_FAIL":
      return {...state, loading: false, error: action.payload}
      
    default:
      return state
  }
} 

export default postsReducers