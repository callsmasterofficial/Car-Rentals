import React from "react";

function BlogPopularArticals() {
  return (
    <>
    <div className="">
      <div>
        <h1 className="text-xl font-bold mt-10 mb-4">POPULAR ARTICALS</h1>
      </div>
      {BlogPopularArticalsData.map((data) => {
        return (
          <div className="flex mt-2 mb-2 p-2">
            <div className="mr-4 hover:cursor-pointer ">
              <img
                className="w-[100%] h-[60px]"
                src={data.img}
              />
            </div>
            <div>
              <p className="hover:cursor-pointer hover:text-blue-500">{data.title}</p>
              <p className="text-xs	hover:cursor-pointer text-blue-500">{data.date}</p>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default BlogPopularArticals;

const BlogPopularArticalsData = [
  {
    id: "1",
    img: "https://cdn2.rcstatic.com/images/seo_graphics/Spain/alicante-daytime-spain-800-359.jpg",
    title: "Our City Guide to Alicante, Spain",
    date: "December 1,2015 4:20pm",
  },
  {
    id: "2",
    img: "https://cdn2.rcstatic.com/images/seo_graphics/Spain/alicante-daytime-spain-800-359.jpg",
    title: "Our City Guide to Alicante, Spain",
    date: "December 1,2015 4:20pm",
  },
  {
    id: "3",
    img: "https://cdn2.rcstatic.com/images/seo_graphics/Spain/alicante-daytime-spain-800-359.jpg",
    title: "Our City Guide to Alicante, Spain",
    date: "December 1,2015 4:20pm",
  },
  {
    id: "4",
    img: "https://cdn2.rcstatic.com/images/seo_graphics/Spain/alicante-daytime-spain-800-359.jpg",
    title: "Our City Guide to Alicante, Spain",
    date: "December 1,2015 4:20pm",
  },
  {
    id: "5",
    img: "https://cdn2.rcstatic.com/images/seo_graphics/Spain/alicante-daytime-spain-800-359.jpg",
    title: "Our City Guide to Alicante, Spain",
    date: "December 1,2015 4:20pm",
  },
];
