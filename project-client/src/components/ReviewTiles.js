import React, { useEffect, useState } from "react"
import './ReviewTiles.css'
import moment from 'moment'
import { BsTrash } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import Comment from './Comment'
import CommentForm from './CommentForm'

function ReviewTiles({ review, handleReviewDelete, isLoggedIn, currentUser, loggedInUserId }) {
  const { id, star_rating, title, comment, created_at, user_id } = review;
  const [reviewAuthor, setReviewAuthor] = useState([]);
  const [reviewComments, setReviewComments] = useState([])
  const [commentsShowing, setCommentsShowing] = useState(false)


  console.log(commentsShowing)

  // console.log(`Review id? ${id}`)

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
  const date = moment(created_at).format("MMM D")

  const isCurrentUser = currentUser.username === reviewAuthor ? true : false




  // console.log(created_at)
  // const [date, time] = created_at.split("T")
  // const cutDate = date.split("-")
  // console.log(cutDate)
  
  // 2022-05-31T20:45:28.272Z
  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${id}`)
    .then(res => res.json())
    .then(data => setReviewComments(data))
  }, [])

  const handleCommentDelete = (deletedCommentId) => {
    const updatedComments = reviewComments.filter((comment) => comment.id !== deletedCommentId )
    fetch(`http://localhost:9292/reviews/${id}/${deletedCommentId}`, {
        method: 'DELETE'
    })
    setReviewComments(updatedComments)
  }

  const renderComments = reviewComments.map(comment => {
    return <Comment key={comment.id} comment={comment} isLoggedIn={isLoggedIn} currentUser={currentUser} handleCommentDelete={handleCommentDelete}/>
  })

  const handleCommentSubmit = (newComment) => {
    const updatedComments = [...reviewComments, newComment];
    setReviewComments(updatedComments)
  }

  const handleShowComments = (e) => {
    setCommentsShowing(!commentsShowing)
  }

  


  return (
    <>
      <div id="card">
        <div id="container">
          <div className='stars-name'>
            <div className='stars-ago'>
              <>
                <p id="stars">{renderStars(star_rating)} </p>
              </>
              <div>
                {isLoggedIn && isCurrentUser ? <button className='review-button' onClick={() => handleDelete(id)}><BsTrash/></button> : null }
              </div>
            </div>
            <small id="username"><b> {reviewAuthor}</b><small id="time-ago"> {date}, {time}</small></small>
          </div>
        </div>
        <br></br>
        <h4>{title}</h4>
        <p>{comment}</p>
        <button id="show-comments-btn" onClick={handleShowComments}>{commentsShowing ? "hide comments" : "show comments"}</button>
      </div>
      {commentsShowing ? 
      <div id="review-comments">
        {renderComments}
        {reviewComments.length > 0 ? null : <small>Be the first to leave a comment on this review!</small>}
        {isLoggedIn ? <CommentForm reviewId={id} loggedInUserId={loggedInUserId} handleCommentSubmit={handleCommentSubmit}/> : null }
      </div>
      : null }
    </>
  )
}

export default ReviewTiles;


// delete button

// style="min-height: 120px;"
// style="width: 300px;"
