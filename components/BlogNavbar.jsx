import React, { useState } from "react";
import BlogPopularArticals from "./BlogPopularArticals";
import BlogRecentArticals from "./BlogRecentArticals";
import BlogTopCategory from "./BlogTopCategory";

function BlogNavbar() {
  const [dropOff, setdropOff] = useState("Recent Articles");
  //   const [dropOff1, setdropOf1] = useState(false);

  return (
    <div className="mt-5 border sm:w-[75%] md:w-[100%]">
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a
            className={`inline-block py-2 px-4 text-black hover:text-blue-600 font-semibold  ${dropOff === "Recent Articles" && "bg-gray-300"} ` }
            onClick={() => setdropOff("Recent Articles")}
          >
            Recent Articles
          </a>
        </li>
        <li className="mr-1">
          <a
            className={`inline-block py-2 px-4 text-black hover:text-blue-600 font-semibold  ${dropOff === "Top Categories" && "bg-gray-300"} ` }
            onClick={() => setdropOff("Top Categories")}
          >
            Top Categories
          </a>
        </li>
      </ul>
      {dropOff === "Recent Articles" && <BlogRecentArticals />}

      {dropOff === "Top Categories" && <BlogTopCategory />}
    </div>
  );
}

export default BlogNavbar;
