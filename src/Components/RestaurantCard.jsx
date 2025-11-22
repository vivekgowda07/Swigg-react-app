import { CDN_IMG } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <>
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_IMG + cloudinaryImageId}
          alt="restaurant"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwo} </h3>
        <h3>{avgRating} Ratings</h3>
        <h3>{resData.info.sla.deliveryTime} Minutes to Deliver</h3>
      </div>
    </>
  );
};

export default RestaurantCard;
