const initialState = {
  loading: false,
  token: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
}
