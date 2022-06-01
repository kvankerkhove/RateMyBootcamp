import BootcampItem from "./BootcampItem";

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
    <div className="home">
      {isLoggedIn ? <h1>Welcome, {currentUser.username}</h1> : null}
      {renderBootcamps}
    </div>
  );
}

export default Home;
