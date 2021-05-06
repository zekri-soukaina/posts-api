import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article/Article";

export default function UserPage() {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );

      console.log(response.data);
      setUserPosts(response.data);
    }
    fetchData();
  }, [userId]);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>All the post for user{userId}</h1>
      <p>He got {userPosts.length} posts</p>
      {userPosts ? (
        userPosts.map((post) => {
          return <Article key={post.id} article={post} />;
        })
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
}
