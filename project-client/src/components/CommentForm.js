import React, { useState } from 'react'
import './CommentForm.css'

function CommentButton({reviewId, loggedInUserId, handleCommentSubmit}) {

  console.log(loggedInUserId)
  const [commentFormData, setCommentFormData] = useState({
    text: "",
    user_id: loggedInUserId,
    review_id: reviewId
  })

  function handleOnChange(e) {
    setCommentFormData({ ...commentFormData, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentFormData),
    })
      .then((res) => res.json())
      .then((data) => handleCommentSubmit(data));

    setCommentFormData({...commentFormData, text: ""})
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="comment-form" onChange={handleOnChange} value={commentFormData.text}/>
        <button type="submit" id="comment-button">Post</button>
    </form>
  )
}

export default CommentButton