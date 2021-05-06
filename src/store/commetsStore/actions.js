import axios from "../axios";

// const API_URL = `https://jsonplaceholder.typicode.com`;

export function startLoading() {
  return {
    type: "LOADING",
  };
}

export function postCommentsFetched(data) {
  return {
    type: "COMMEMTS-FETCHED",
    payload: data,
  };
}

export const fetchPostAndComments = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`/posts/${id}`),
      axios.get(`/posts/${id}/comments`),
    ]);
    console.log(
      " post:",
      postResponse.data,
      "comments:",
      commentsResponse.data
    );
    dispatch(
      postCommentsFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
