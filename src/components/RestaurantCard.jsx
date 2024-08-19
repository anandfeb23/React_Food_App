import React from "react";
import { IMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  if (!resData) {
    return <Shimmer />;
  }

  return (
    <div
      className="m-4 p-2 w-[300px] h-[380px] rounded-lg overflow-hidden flex flex-col justify-between transition duration-200 hover:scale-105"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <div style={{ height: "60%" }}>
        <img
          className="rounded-lg w-full h-full object-cover"
          src={IMG_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>
      <div className="p-2" style={{ height: "40%" }}>
        <h3 className="text-lg font-bold mb-1 overflow-hidden overflow-ellipsis">
          {name}
        </h3>
        <h4 className="mb-1 overflow-hidden overflow-ellipsis">
          {cuisines.join(", ")}
        </h4>
        <div className="flex justify-between">
          <h4>
            <i className="ri-star-s-fill"></i> {avgRating}
          </h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
