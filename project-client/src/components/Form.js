import React, { useState } from "react";
import "./Form.css";
import StarRating from "./StarRating";

function Form({ currentBootcamp }) {
  const [formData, setFormData] = useState({
    star_rating: "",
    comment: "",
    user_id: "",
    bootcamp_id: currentBootcamp.id,
  });

  console.log(currentBootcamp);

  function handleOnChange(e) {
    setFormData({ ...formData, comment: e.target.value });
  }

  const handleStarRating = (rating) => {
    setFormData({ ...formData, star_rating: rating });
  };

  console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} value={formData.comment} />
        <StarRating handleStarRating={handleStarRating} />
        <button type="Submit">Create Review</button>
      </form>
    </div>
  );
}

export default Form;
