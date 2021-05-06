const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postsCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
        post: null,
        comments: [],
      };
    }
    case "COMMEMTS-FETCHED": {
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
