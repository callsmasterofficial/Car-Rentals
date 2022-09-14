import React from "react";
import Facebook from "./Icons/Facebook";
import Pinterest from "./Icons/Pinterest";
import Plus from "./Icons/Plus";
import Youtube from "./Icons/Youtube";

function BlogSocial() {
  return (
    <div className="">
        <h1 className="text-xl font-bold mb-4"> Social</h1>
      <div className="flex mb-10 p-2">
        <div className="bg-[#dadada] h-[30px] w-[30px] hover:bg-[#39569c] hover:cursor-pointer">
          <Facebook className="mx-auto my-auto" />
        </div>
        <div className="bg-[#dadada] h-[30px] w-[30px] ml-2 hover:bg-[#E60023] hover:cursor-pointer ">
          <Pinterest />
        </div>
        <div className="bg-[#dadada] h-[30px] w-[30px] ml-2 hover:bg-[#c4302b] hover:cursor-pointer ">
          <Youtube />
        </div>
        <div className="bg-[#dadada] h-[30px] w-[30px] ml-2 hover:bg-red-600 hover:cursor-pointer">
          <Plus />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4">CATEGORIES</h1>
        <ul>
          <li className="border-b-2 my-2 p-2 hover:cursor-pointer hover:text-blue-500">USA</li>
          <li className="border-b-2 my-2 p-2 hover:cursor-pointer hover:text-blue-500">SPAIN</li>
          <li className="border-b-2 my-2 p-2 hover:cursor-pointer hover:text-blue-500">AUSTRALIA</li>
          <li className="border-b-2 my-2 p-2 hover:cursor-pointer hover:text-blue-500">ITALY</li>
          <li className="border-b-2 my-2 p-2 hover:cursor-pointer hover:text-blue-500">NEW YORK</li>
        </ul>
      </div>
    </div>
  );
}

export default BlogSocial;
