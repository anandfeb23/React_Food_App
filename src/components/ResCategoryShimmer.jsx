import React from "react";

const ResCategoryShimmer = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="p-4 m-2 border-b-2 border-gray-200 text-left flex justify-between items-center animate-pulse bg-gray-200 rounded-md">
          <div className="w-4/5">
            <div className="bg-gray-300 h-4 w-full block mb-1"></div>
            <div className="bg-gray-300 h-3 w-2/3"></div>
          </div>
          <div className="w-1/5 p-4">
            <div className="bg-gray-300 h-12 w-full"></div>
          </div>
        </div>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between items-center animate-pulse"
          >
            <div className="w-10/12">
              <div className="py-2">
                <div className="bg-gray-200 h-4 w-full block mb-1"></div>
                <div className="bg-gray-200 h-4 w-3/4 block"></div>
              </div>
              <div className="text-xs bg-gray-200 h-3 w-full"></div>
            </div>
            <div className="w-2/12 p-4">
              <button className="p-2 rounded-lg bg-opacity-50 text-black shadow-lg bg-gray-200">
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResCategoryShimmer;
