import BootcampItem from "./BootcampItem";
import './Home.css' 

function Home({ bootcamps, handleReviewClick, currentUser, isLoggedIn }) {
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
      {isLoggedIn ? <h1>Welcome, {currentUser.username}</h1> : null}
      <h1>BootCamps</h1>
      <h3>Harsh Reviews are Welcome</h3>
      <div className='wrapper'>{renderBootcamps}</div>
    </div>
  );
}

export default Home;
