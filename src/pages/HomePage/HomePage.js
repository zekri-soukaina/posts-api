import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Article from "../../components/Article/Article";
import { fetchPosts } from "../../store/postsStore/actions";

import { selectLoading, selectPosts } from "../../store/postsStore/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const postData = useSelector(selectPosts);
  console.log("data", postData);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Home </h2>

      <p>{postData.length} articles found.</p>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          postData.map((post, index) => {
            return <Article key={index} article={post} />;
          })
        )}
      </div>
    </div>
  );
}
