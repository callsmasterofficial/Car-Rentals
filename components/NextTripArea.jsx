import React from "react";

function NextTripArea({imgsrc, imgText}) {
  return (
    <>
    <div className="">
    {/* <div>
        <h1 className="text-xl font-bold my-2">{heading}</h1>
    </div> */}
    <div className="grid-cols-3 flex next-trip-mobile">
      <div className="grid-span-1 sm:pr-2 pt-2 pb-2 cursor-pointer	">
        <div className="relative overflow-hidden">
          <img className=" object-cover  hover:scale-110 transition-all duration-300 ease-linear h-[300px] w-[100%] brightness-50" src={imgsrc}></img>
          <div className="absolute bottom-0 pr-5 pl-5 pb-2">
            <h1 className="text-xl font-bold text-white" >{imgText}</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default NextTripArea;

