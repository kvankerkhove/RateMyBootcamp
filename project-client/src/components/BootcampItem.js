import React from 'react'

function BootcampItem({bootcamp}) {
    const {id, name, image, description, reviews} = bootcamp



     
    const star_review = reviews.map(review => review.star_rating)
    const average_review = Math.round(star_review.reduce((a, b) => a + b) / star_review.length)

    // const handleOnClick = (name) => {
    //     console.log(name)
    // }

    
  return (
    <div>
        <h1>{name}</h1>
        <img src={image}/>
        <p>{description}</p>
        <p>{average_review}</p>
        <a href={`/bootcamps/${id}`}>Reviews</a>
    </div>
  )
}

export default BootcampItem