import { useState, useEffect } from "react";
import BootcampItem from "./BootcampItem";
import './Home.css' 

function Home({ bootcamps, handleReviewClick }) {
  const [higestRatedBootcamp, setHigestRatedBootcamp] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/highest_rated')
    .then(res => res.json())
    .then(data => setHigestRatedBootcamp(data.name))
  }, [])

  const renderBootcamps = bootcamps.map((bootcamp) => {
    return (
      <BootcampItem
        key={bootcamp.id}
        bootcamp={bootcamp}
        handleReviewClick={handleReviewClick}
      />
    );
  });
  return (
    <div id="home">
      <h1 id="title">Review Coding Bootcamps</h1>
      <h2>Current leader: {higestRatedBootcamp}</h2>
      <h3 id="subtitle">Honest reviews are welcome!</h3>
      <div className="wrapper">{renderBootcamps}</div>
  </div>
  );
}

export default Home;
