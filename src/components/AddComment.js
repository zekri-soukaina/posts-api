import React, { useState } from "react";
import Comment from "./Comment";
import { uuid } from "uuidv4";

export default function AddComment() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [newComment, setNewComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();
    if (!email || !name || !body) {
      alert("Sorry something went wrong, make sure you fill all the info");
    } else {
      const newCommentList = [
        ...newComment,
        { id: uuid(), email: email, name: name, body: body },
      ];
      setNewComment(newCommentList);
      console.log(newCommentList);
      setEmail("");
      setName("");
      setBody("");
      alert("Thank you, Your comment has been posted!");
    }
  };
  //   console.log("newComment", newComment);
  return (
    <div>
      <h2 style={{ backgroundColor: "lightcyan" }}>Add New Comment </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
        }}>
        <label
          style={{
            height: " 20px",
            width: "150px",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "20px",
            paddingRight: "10%",
          }}>
          Email :{" "}
        </label>
        <input
          style={{ width: "300px", height: "30px", border: "3px solid #ccc" }}
          type="email"
          name="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label
          style={{
            height: " 20px",
            width: "150px",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "20px",
            paddingRight: "10%",
          }}>
          Title :{" "}
        </label>
        <input
          style={{
            width: "300px",
            height: "30px",
            border: "3px solid #ccc",
          }}
          type="text"
          name="name"
          placeholder="give name/title to your comment"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label
          style={{
            height: " 20px",
            width: "150px",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "20px",
            paddingRight: "10%",
          }}>
          Comment :{" "}
        </label>
        <textarea
          style={{ width: "300px", height: "50px", border: "3px solid #ccc" }}
          type="text"
          name="body"
          placeholder="your main comment here!"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <br />
      </form>
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          border: " 2px solid rgb(114, 114, 114)",
          padding: "10px 20px",
          marginBottom: "30px",
        }}
        type="submit"
        onClick={addComment}>
        Post Your Comment!
      </button>
      {newComment
        ? newComment.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
        : null}
    </div>
  );
}
