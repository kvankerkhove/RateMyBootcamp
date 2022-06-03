import React from "react";
import "./About.css";
import logo2 from "../123.png";

function About() {
  return (
    <div id="about-page">
      <div id="about-wrapper">
        <img src={logo2} alt="" width="150px" id="logo" />
        <h1 id="about-title">Choose the right coding bootcamp</h1>
        <br></br>
        <p id="about-text">
          Here at RateMyBootcamp, we understand that deciding to enroll in a
          coding bootcamp can be a huge decision. That's why we wanted to create
          an application where users can come and find honest and transparent
          bootcamp reviews. An interactive space where users can seek advice or
          wisdom from bootcamp alumni in order to find the path that is best for
          you!
        </p>
        <br></br>
        <p id="about-second">
          With over 100+ coding bootcamps across the US and Canada, choose the
          right bootcamp to kickstart your career in tech
        </p>
        <br></br>
        <h1 id="about-rating">Rated the #1 source for Bootcamp Reviews</h1>
      </div>
    </div>
  );
}
export default About;
