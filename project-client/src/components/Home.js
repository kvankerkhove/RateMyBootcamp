import { useState, useEffect } from "react";
import BootcampItem from "./BootcampItem";
import "./Home.css";
import logo2 from "../123.png";

function Home({ bootcamps, handleReviewClick }) {
  const [higestRatedBootcamp, setHigestRatedBootcamp] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/highest_rated")
      .then((res) => res.json())
      .then((data) => setHigestRatedBootcamp(data.name));
  }, []);

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
      <div id="header">
        <img src={logo2} alt="" width="150px" id="logo" />
        <h1 id="title">Rate My Bootcamp!</h1>
        <h2>Current leader: {higestRatedBootcamp}</h2>
        <h3 id="subtitle">Honest reviews are welcome!</h3>
      </div>
      <div className="wrapper">{renderBootcamps}</div>
    </div>
  );
}

export default Home;
