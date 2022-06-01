import { Switch, Route, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Reviews from "./Reviews";

function App() {
  const [bootcamps, setBootcamps] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [currentBootcamp, setCurrentBootcamp] = useState([]);

  const history = useHistory();
  // let { id } = useParams()
  // console.log(bootcamps)
  // console.log(id)
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      setCurrentPath(location.pathname);
    });
  }, [history]);

  useEffect(() => {
    fetch("http://localhost:9292/bootcamps")
      .then((res) => res.json())
      .then((data) => setBootcamps(data));
  }, []);

  function handleReviewClick(bootcamp, name, average_review) {
    setCurrentBootcamp(bootcamp);
    history.push("/reviews");
    fetch(`http://localhost:9292/bootcamps/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }

  function handleReviewDelete(reviewid) {
    console.log(currentBootcamp);
    console.log(reviewid);

    const updatedReviews = reviews.filter((review) => review.id !== reviewid);

    fetch(
      `http://localhost:9292/bootcamps/${currentBootcamp.name}/${reviewid}`,
      {
        method: "DELETE",
      }
    );
    setReviews(updatedReviews);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bootcamps">
          <Home bootcamps={bootcamps} handleReviewClick={handleReviewClick} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/reviews">
          <Reviews
            reviews={reviews}
            currentBootcamp={currentBootcamp}
            handleReviewDelete={handleReviewDelete}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
