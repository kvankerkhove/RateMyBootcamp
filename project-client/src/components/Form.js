import React, { useState } from "react";
import "./Form.css";
import StarRating from "./StarRating";

function Form({ currentBootcamp, loggedInUserId, formSubmit }) {
  const [formData, setFormData] = useState({
    star_rating: "",
    title: "",
    comment: "",
    user_id: loggedInUserId,
    bootcamp_id: currentBootcamp.id,
  });




  function handleOnChange(e) {
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value});
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

      setFormData({...formData, star_rating: "", title: "", comment: "" })
  }
  return (
    <div>
      <form id="submit-review-form" onSubmit={handleSubmit}>
        <small className="review-form-labels" >Title</small>
        <input type="text" name="title" placeholder="Enter title here..." onChange={handleOnChange} value={formData.title} />
        <br></br>
        <small className="review-form-labels" >Review</small>
        <textarea type="text" rows="5" name="comment" id="comment-textbox" placeholder="Enter full review here..." onChange={handleOnChange} value={formData.comment}></textarea>
        <StarRating handleStarRating={handleStarRating} />
        <button type="Submit">Create Review</button>
      </form>
    </div>
  );
}

export default Form;
