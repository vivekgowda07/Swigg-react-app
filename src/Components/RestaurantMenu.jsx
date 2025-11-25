import { useState, useEffect } from "react";
import Shimmer from "../Components/Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9872217&lng=77.7373112&restaurantId=1072500&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    const info = json.data?.cards[2]?.card?.card?.info;
    setresInfo(info);
  };

  if (resInfo === null) {
    // Show shimmer or loading while data is being fetched
    return <Shimmer />;
  }

  return (
    <>
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.areaName}</h3>
      <h3>{resInfo.cuisines.join(", ")}</h3>
      <ul>
        <li>Biriyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </>
  );
};

export default RestaurantMenu;
