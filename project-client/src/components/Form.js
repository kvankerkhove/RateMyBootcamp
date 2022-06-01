import React, { useState } from "react";
import "./Form.css";
import StarRating from "./StarRating";

function Form({ currentBootcamp, loggedInUserId, formSubmit }) {
  const [formData, setFormData] = useState({
    star_rating: "",
    comment: "",
    user_id: loggedInUserId,
    bootcamp_id: currentBootcamp.id,
  });

  function handleOnChange(e) {
    setFormData({ ...formData, comment: e.target.value });
  }

  const handleStarRating = (rating) => {
    setFormData({ ...formData, star_rating: rating });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/bootcamps/${currentBootcamp.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => formSubmit(data));
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
