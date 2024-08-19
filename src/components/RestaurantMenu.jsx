import { useParams } from "react-router-dom";
import useResMenu from "../utils/useRestaurantMenu";
import { IMG_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ResCategoryShimmer from "./ResCategoryShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ResCategoryShimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="border border-gray-300 bg-gray-100 rounded-lg p-4 w-100%  mb-6 flex items-center justify-between mx-[150px]">
        <h1 className="text-4xl font-bold mr-4">{name}</h1>
        <div>
          <p className="text-gray-700 text-lg font-semibold">
            {cuisines.join(", ")}
          </p>
          <p className="text-gray-700 text-lg font-semibold">
            {costForTwoMessage}
          </p>
        </div>
        <img
          className="w-28 rounded-lg"
          src={IMG_URL + cloudinaryImageId}
          alt=""
        />
      </div>

      <div className="text-center">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
