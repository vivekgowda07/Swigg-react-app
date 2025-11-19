const RestaurantCard = () => {
  return (
    <>
      <div className="res-card">
        <img
          className="res-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b61937637b1066762d041c3f479e6ee6"
          alt="restaurant"
        />
        <h2>Restarant Name</h2>
        <h3>Dosa, Breakfast</h3>
        <h3>4.4 Rating</h3>
        <h3>35 Minuets</h3>
      </div>
    </>
  );
};

export default RestaurantCard;
