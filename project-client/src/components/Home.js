import BootcampItem from "./BootcampItem";

function Home({ bootcamps, handleReviewClick }) {
  const renderBootcamps = bootcamps.map((bootcamp) => {
    return (
      <BootcampItem
        key={bootcamp.id}
        bootcamp={bootcamp}
        handleReviewClick={handleReviewClick}
      />
    );
  });
  return <div className="home">{renderBootcamps}</div>;
}

export default Home;
