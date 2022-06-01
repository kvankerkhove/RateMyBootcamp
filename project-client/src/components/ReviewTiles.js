import React, { useEffect, useState } from "react";

function ReviewTiles({ review, handleReviewDelete }) {
  const { id, star_rating, comment, created_at, user_id } = review;
  const [reviewAuthor, setReviewAuthor] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${user_id}`)
      .then((res) => res.json())
      .then((data) => setReviewAuthor(data.username));
  }, []);

  function handleDelete(id) {
    handleReviewDelete(id);
  }

  return (
    <div id="card">
      <div id="container">
        <p>{reviewAuthor}</p>
        <p>{star_rating}</p>
        <p>{created_at}</p>
        <h3>{comment}</h3>
        <button onClick={() => handleDelete(id)}>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
}

export default ReviewTiles;
