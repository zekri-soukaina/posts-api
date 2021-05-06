import React from "react";

export default function Comment({ comment }) {
  //   console.log("comment", comment);
  return (
    <div key={comment.id} style={{ border: "1px solid gray", margin: "10px" }}>
      <div style={{ textAlign: "left", padding: "20px" }}>
        <h2>{comment.name}</h2>
        <p>{comment.body}</p>
      </div>

      <p>
        Comment Nº <strong>{comment.id}</strong> &bull; By{" "}
        <strong>{comment.email}</strong> &bull;
      </p>
    </div>
  );
}
