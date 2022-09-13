import React from "react";
import Building from "./Icons/Building";
import Car from "./Icons/Car";

function BlogThreeCards() {
  return (
    <>
           <div className=" h-[100%] col-span-2" >
        <div className="relative opacity-90 ">
          <img className="h-[100%]" src="https://cdn2.rcstatic.com/images/seo_graphics/coastal-drives/great-ocean-road-australia-800-359.jpg" />
          <div className="absolute p-2 bottom-2   text-white		">
            <h1>OUR TOP WINTER DRIVING TIPS</h1>
            <p className="text-xs">December 1,2015 4:20pm</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="relative mr-2">
            <img className="h-[100%]" src="https://cdn2.rcstatic.com/images/site_graphics/newsite/blog-images/guide-city.jpg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90  bg-[#8fc345] rounded-full p-4">
              <Building />
            </div>
          </div>
          <div className="relative ml-2">
            <img className="h-[100%]" src="https://cdn2.rcstatic.com/images/site_graphics/newsite/blog-images/guide-driving%5D.jpg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 bg-[#6daee9] rounded-full p-4">
              <Car />
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default BlogThreeCards;
