import React, {useState, useEffect} from 'react'
import './Comment.css'
import { BsTrash } from 'react-icons/bs'
import moment from 'moment'

function Comment({comment, isLoggedIn, currentUser, handleCommentDelete}) {
    const [commentUser, setCommentUser] = useState("")
    const {id, text, created_at, user_id} = comment

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user_id}`)
          .then((res) => res.json())
          .then((data) => setCommentUser(data.username));
      }, []);


      const isCurrentUser = currentUser.username === commentUser ? true : false

      const handleClick = () => {
          handleCommentDelete(id)
      }

      const time = moment(created_at).fromNow();
      console.log(time)


  return (
    <>
        <small><b>{commentUser}</b> <small>{time} </small>{isLoggedIn && isCurrentUser ? <small onClick={handleClick}><BsTrash/></small> : null}</small>
        <small> {text} </small> 
    </>
  )
}

export default Comment