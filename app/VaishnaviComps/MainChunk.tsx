import React from "react";

const MainChunk = () => {
  return (
    <>
      <div className="relative ">
        <div className=" text-8xl text-center z-20 my-2 absolute w-full font-serif ">Start Your NextCoffee</div>
        <div className="my-14 z-10 scale-90">
            <div className=" animate-fade-up animate-duration-[2000ms] animate-ease-out">
            <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 w-5/6 h-5/6 rounded-full  bg-cyan-900 -z-50"
          ></div>
          <img
            src="coffee.png"
            className="w-full h-full object-cover rounded-full animate-fade-up animate-duration-[2000ms] animate-ease-out"
          />
            </div>
         
        </div>
      </div>
    </>
  );
};

export default MainChunk;
