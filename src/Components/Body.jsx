import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9872217&lng=77.7373112&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonn = await data.json();

    console.log(jsonn);
    setListofRestaurant(
      jsonn.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (ListofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search">
        <input />
        <button>Search</button>
        <button
          className="filter-button"
          onClick={() => {
            const filteredRestourant = ListofRestaurant.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setListofRestaurant(filteredRestourant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {ListofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};
export default Body;
