const Shimmer = () => {
  return (
    <>
      <div className="search">
        <input />
        <button>Search</button>
        <button className="filter-button">Top Rated Restaurant</button>
      </div>

      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </>
  );
};

export default Shimmer;
