// import React from "react";

// function BootcampItem({ bootcamp, handleReviewClick }) {
//   const { id, name, image, description, reviews } = bootcamp;

//   const star_review = reviews.map((review) => review.star_rating);
//   const average_review = Math.round(
//     star_review.reduce((a, b) => a + b) / star_review.length
//   );

//   function handleOnClick(bootcamp, name, average_review) {
//     handleReviewClick(bootcamp, name, average_review);
//   }


//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={image} />
//       <p>{description}</p>
//       <p>{average_review}</p>
//       <button onClick={() => handleOnClick(bootcamp, name, average_review)}>
//         Reviews
//       </button>
//     </div>
//   );
// }

// export default BootcampItem;
import React from "react";
import { Card, Button } from "react-bootstrap";

function BootcampItem({ bootcamp, handleReviewClick }) {
 const { id, name, image, description, reviews } = bootcamp;

 const star_review = reviews.map((review) => review.star_rating);
 const average_review = Math.round(
   star_review.reduce((a, b) => a + b) / star_review.length
 );

 function handleOnClick(bootcamp, name, average_review) {
   handleReviewClick(bootcamp, name, average_review);
 }
 // const handleOnClick = (name) => {
 //   handleReviewClick(name);
 // };

 const renderStars = (average_review) => {
   let stars = "";
   for (let i = 1; i <= average_review; i++) {
     stars += "★";
   }
   for (let i = average_review; i < 5; i++) {
     stars += "☆";
   }
   return stars;
 };

 return (
   <Card border="primary" style={{ width: "18rem" }} className="card">
     <Card.Body className="card_body">
       <Card.Img variant="top" src={image} className="card_image" />
       <Card.Title className="card_title">{name}</Card.Title>
       <Card.Text>{renderStars(average_review)}</Card.Text>
       <Button
         className="card_btn"
         variant="primary"
         onClick={() => handleOnClick(bootcamp, name, average_review)}
       >
         Reviews
       </Button>
     </Card.Body>
   </Card>
   //   <div className="card">
   //     <h1>{name}</h1>
   //     <img src={image} />
   //     <p>{description}</p>
   //     <p>{average_review}</p>
   //     <button onClick={() => handleOnClick(bootcamp, name, average_review)}>
   //       Reviews
   //     </button>
   //   </div>
 );
}

export default BootcampItem;