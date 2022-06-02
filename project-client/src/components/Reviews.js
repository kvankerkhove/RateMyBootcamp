import React from "react";
import ReviewTiles from "./ReviewTiles";
import Form from "./Form";
import './Reviews.css'

function Reviews({
  reviews,
  currentBootcamp,
  handleReviewDelete,
  loggedInUserId,
  formSubmit,
  isLoggedIn,
  currentUser,
}) {


  const review = reviews.map((review) => {
    return (
      <ReviewTiles
        key={review.id}
        review={review}
        handleReviewDelete={handleReviewDelete}
        isLoggedIn = {isLoggedIn}
        currentUser = {currentUser}
        loggedInUserId = {loggedInUserId}
      />
    )
  })

  return (
    <div id="reviews-page">
      <div className='reviews-container'>
          <div className='reviews-child'>
              <div className='reviews-header'>
                  <div>
                      <img className='bootcamp-image' src={currentBootcamp.image} alt=""  />
                  </div>
                  <h1>{currentBootcamp.name}</h1>
              </div>
              <br></br>
              <small>{reviews.length} user reviews</small>
              <div>
                  {review}
              </div>
          </div>
          {isLoggedIn ? 
          <div className='form-child'>
              <h1>Submit a review!</h1>
              <Form
              currentBootcamp={currentBootcamp}
              loggedInUserId={loggedInUserId}
              formSubmit={formSubmit}
              />
          </div>
          : <div className='form-child'>
          <h1>Please Login to Review!</h1>
          </div>}
      </div>
    </div>
  );
}

export default Reviews;
