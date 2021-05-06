export function selectLoading(reduxState) {
  return reduxState.postsReducer.loading;
}
export const selectPosts = (reduxState) => reduxState.postsReducer.post;
