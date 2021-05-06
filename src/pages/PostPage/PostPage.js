import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddComment from "../../components/AddComment";
import Comment from "../../components/Comment";
import { fetchPostAndComments } from "../../store/commetsStore/actions";
import { selectPostAndComments } from "../../store/commetsStore/selectors";

export default function PostPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const postData = useSelector(selectPostAndComments);
  console.log("postData", postData);

  useEffect(() => {
    dispatch(fetchPostAndComments(id));
  }, [dispatch, id]);

  return (
    <div
      style={{
        marginTop: "100px",
      }}>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 style={{ backgroundColor: "lightcyan" }}>Post</h2>
          <div
            style={{
              marginTop: "30px",
              textAlign: "left",
              padding: "40px",
            }}>
            <h1>{postData.post.title}</h1>
            <p>
              By user <strong>{postData.post.userId}</strong> &bull;{" "}
            </p>
            <p>{postData.post.body}</p>
          </div>
          <AddComment />

          <h2 style={{ backgroundColor: "lightcyan" }}>Comments</h2>
          {postData.comments.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            postData.comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })
          )}
        </div>
      )}
    </div>
  );
}
