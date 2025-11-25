import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import Header from "../Components/Header";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchTxt, setSearchtext] = useState("");

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
        <input
          type="text"
          className="search-box"
          value={searchTxt}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredRestourants = ListofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilteredRestaurant(filteredRestourants);
          }}
        >
          Search
        </button>
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};
export default Body;
