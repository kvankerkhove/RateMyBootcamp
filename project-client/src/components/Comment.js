import React, {useState, useEffect} from 'react'
import './Comment.css'
import { BsTrash } from 'react-icons/bs'

function Comment({comment, isLoggedIn, currentUser, handleCommentDelete}) {
    const [commentUser, setCommentUser] = useState("")
    const {id, text, user_id} = comment

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user_id}`)
          .then((res) => res.json())
          .then((data) => setCommentUser(data.username));
      }, []);


      const isCurrentUser = currentUser.username === commentUser ? true : false

      const handleClick = () => {
          handleCommentDelete(id)
      }


  return (
    <>
        <small><b>{commentUser}</b></small>
        <small> {text} {isLoggedIn && isCurrentUser ? <small onClick={handleClick}><BsTrash/></small> : null}</small> 
    </>
  )
}

export default Comment