import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
const Card = () => {
  const data = {
    username: "PRAKASH",
    name: "Product Card",
    description:
      "A great product with amazing features and modern design.",
    price: "$59.99",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="relative w-[320px] h-[450px] bg-white rounded-[40px] shadow-xl pt-28 px-6">

        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2">
          <div className="w-[180px] h-[180px] bg-slate-500 rounded-full"></div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase">
            {data.username}
          </p>

          <h1 className="text-3xl font-bold mt-2">
            {data.name}
          </h1>

          <p className="text-gray-500 text-sm mt-3">
            {data.description}
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <span className="w-6 h-6 rounded-full"><IoStarSharp color="yellow" /></span>
            <span className="w-6 h-6 rounded-full"><IoStarSharp color="yellow" /></span>
            <span className="w-6 h-6 rounded-full"><IoStarSharp color="yellow" /></span>
            <span className="w-6 h-6 rounded-full"><IoStarSharp color="yellow" /></span>
            <span className="w-6 h-6 rounded-full"><IoStarSharp  /></span>
          </div>

          <h2 className="text-5xl font-bold mt-8">
            {data.price}
          </h2>
        </div>

        <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-center">
          <button className="w-12 h-12 rounded-full border-2 flex items-center justify-center">
            <MdOutlineShoppingBag />
          </button>

          <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold">
            BUY NOW!
          </button>

          <button className="w-12 h-12 rounded-full border-2 flex items-center justify-center">
            <CiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;