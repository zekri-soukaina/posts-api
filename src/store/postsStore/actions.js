import axios from "../axios";

export function startLoadingPost() {
  return {
    type: "POSTS-LOADING",
  };
}
export function postsFetshed(data) {
  return {
    type: "POSTS-FETCHED",
    payload: data,
  };
}

export const fetchPosts = async (dispatch, getState) => {
  try {
    dispatch(startLoadingPost());
    const response = await axios.get("/posts");
    // console.log("we are in action", response.data);
    dispatch(postsFetshed(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
