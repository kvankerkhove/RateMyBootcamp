import React from "react";

function BootcampItem({ bootcamp, handleReviewClick }) {
  const { id, name, image, description, reviews } = bootcamp;

  const star_review = reviews.map((review) => review.star_rating);
  const average_review = Math.round(
    star_review.reduce((a, b) => a + b) / star_review.length
  );

  function handleOnClick(bootcamp, name, average_review) {
    handleReviewClick(bootcamp, name, average_review);
  }
  // const handleOnClick = (name) => {
  //   handleReviewClick(name);
  // };

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <p>{description}</p>
      <p>{average_review}</p>
      <button onClick={() => handleOnClick(bootcamp, name, average_review)}>
        Reviews
      </button>
    </div>
  );
}

export default BootcampItem;
