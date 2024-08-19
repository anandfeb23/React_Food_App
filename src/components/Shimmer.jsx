import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container ml-4 mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card w-[300px] h-[350px] p-2 rounded-lg overflow-hidden flex flex-col justify-between transition duration-200 hover:scale-105 relative shadow-md"
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
          }}
        >
          <div className="animate-pulse">
            <div className="shimmer-image h-40 w-full bg-gray-200 mb-4 gliding"></div>
          </div>
          <div className="p-4">
            <div className="shimmer-name h-6 bg-gray-200 mb-2 gliding"></div>
            <div className="shimmer-cuisines h-4 bg-gray-200 mb-2 gliding"></div>
            <div className="flex justify-between">
              <div className="shimmer-rating h-4 bg-gray-200 gliding"></div>
              <div className="shimmer-cost h-4 bg-gray-200 gliding"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
