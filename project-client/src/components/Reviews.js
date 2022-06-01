import React from "react";
import ReviewTiles from "./ReviewTiles";
import Form from "./Form";

function Reviews({
  reviews,
  currentBootcamp,
  handleReviewDelete,
  loggedInUserId,
}) {
  console.log(reviews);
  console.log(currentBootcamp);
  const review = reviews.map((review) => {
    return (
      <ReviewTiles
        key={review.id}
        review={review}
        handleReviewDelete={handleReviewDelete}
      />
    );
  });
  return (
    <div>
      <h1>{currentBootcamp.name}</h1>
      <img src={currentBootcamp.image} alt="" />
      {review}
      <Form currentBootcamp={currentBootcamp} loggedInUserId={loggedInUserId} />
    </div>
  );
}

export default Reviews;
