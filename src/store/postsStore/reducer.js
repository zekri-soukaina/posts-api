const initialState = {
  loading: true,
  post: [],
};
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS-LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "POSTS-FETCHED": {
      // console.log("am in payload", action.payload);
      return {
        loading: false,
        post: [...state.post, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
