import {
  faHeart,
  faHeartBroken,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Article.css";
export default function Article({ article }) {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);
  const [numNoLikes, set_numNoLikes] = useState(0);
  const [like, setLike] = useState(true);

  const toggleLike = () => {
    setLike(!like);
  };

  const increment = () => {
    set_numLikes(numLikes + 1);
  };
  const decrement = () => {
    set_numNoLikes(numNoLikes - 1);
  };
  return (
    <div className="article">
      <div className="box">
        <div className="flex">
          <div>
            <button onClick={toggleLike}>
              {like ? (
                <>
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </>
              ) : (
                <>
                  <FontAwesomeIcon onClick={decrement} icon={faHeartBroken} />
                </>
              )}
              {article.id}
            </button>
            <h2>
              {" "}
              <FontAwesomeIcon onClick={increment} icon={faThumbsUp} />{" "}
              <b>{numLikes}</b>
            </h2>
            <h2>
              {" "}
              <FontAwesomeIcon onClick={decrement} icon={faThumbsDown} />{" "}
              <b>{numNoLikes}</b>
            </h2>
          </div>

          <div className="info">
            <h3>{article.title}</h3>
            <Link to={`/user/${article.userId}/posts`}>
              {" "}
              <p>by user:{article.userId}</p>
            </Link>
            <p>
              Definition:
              {article.body}{" "}
            </p>
          </div>
        </div>

        <Link to={`/post/${article.id}/comments`}>
          <button type="button">Read this Article</button>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
