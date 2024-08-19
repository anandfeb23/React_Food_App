import React, { useState, useEffect } from "react";

const Instamart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hey, Welcome to Instamart</h1>
      <h2 className="text-xl font-semibold mb-8">Order Groceries Now !!!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-blue-500 font-semibold">{product.price}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instamart;
