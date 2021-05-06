export function selectPostAndComments(reduxState) {
  return reduxState.postsCommentsReducer.loading
    ? null
    : {
        post: reduxState.postsCommentsReducer.post,
        comments: reduxState.postsCommentsReducer.comments,
      };
}
