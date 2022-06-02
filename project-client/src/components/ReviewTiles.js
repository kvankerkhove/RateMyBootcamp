import React, { useEffect, useState } from "react"
import './ReviewTiles.css'
import moment from 'moment'
import { GrEdit } from 'react-icons/gr'
import { BsTrash } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

function ReviewTiles({ review, handleReviewDelete, isLoggedIn, currentUser }) {
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

  const renderStars = (numberOfStars) => {
    let stars = ""
    for(let i = 1; i <= numberOfStars; i++){
      stars += '★'
    }
    for(let i = numberOfStars; i < 5; i++){
      stars += '☆'
    }
    return stars
  }

  const time = moment(created_at).fromNow();

  const isCurrentUser = currentUser.username === reviewAuthor ? true : false

  console.log(isCurrentUser)


  // console.log(created_at)
  // const [date, time] = created_at.split("T")
  // const cutDate = date.split("-")
  // console.log(cutDate)
  
  // 2022-05-31T20:45:28.272Z



  return (
    <div id="card">
      <div id="container">
        <div className='stars-name'>
          <div className='stars-ago'>
            <>
              <p id="stars">{renderStars(star_rating)} </p>
            </>
            <div>

              {isLoggedIn && isCurrentUser ? <button className='review-button' onClick={() => handleDelete(id)}><BsTrash/></button> : null }
              {isLoggedIn && isCurrentUser ? <button className='review-button'><GrEdit/></button> : null }
            </div>
          </div>
          <small id="username"><b> {reviewAuthor}</b><small id="time-ago"> {time}</small></small>
        </div>
      </div>
      <h3>{comment}</h3>
    </div>
  )
}

export default ReviewTiles;


// delete button

// style="min-height: 120px;"
// style="width: 300px;"
