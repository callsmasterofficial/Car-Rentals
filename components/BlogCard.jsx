import React from "react";
import BlogSocial from "./BlogSocial";
import BlogPopularArticals from "./BlogPopularArticals";
import BlogNavbar from "./BlogNavbar";

function BlogCard() {
  return (
    <>
      <div className="lg:flex lg:col-span-12 mt-5 w-[90%]  mx-auto lg:w-[80%] helpArea">
        <div className="lg:col-span-8 lg:w-[70%] lg:mr-4	">
          {BlogCardData.map((data) => {
            return (
              <div className="border mt-5 md:flex">
                <div className="relative hover:cursor-pointer	">
                  <img className="h-[100%]" src="https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg" />
                  <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                    {data.category}
                  </div>
                </div>

                <div className="p-3">
                  <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	">{data.Heading}</h1>
                  <p className="text-sm	text-gray-500 mt-2 mb-2 hover:cursor-pointer hover:text-blue-500">{data.date}</p>
                  <p>{data.description}</p>
                  <a className=" underline hover:cursor-pointer hover:text-blue-500">Read More</a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-4">
          <div className="w-100%">
          <BlogNavbar />
          </div>
          <div className="border p-4 mt-5">
            <BlogSocial />
            <BlogPopularArticals />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;

const BlogCardData = [
  {
    id: "1",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "IN THE PRESS",
  },
  {
    id: "2",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Australia",
  },
  {
    id: "3",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Spain",
  },
  {
    id: "4",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "IN THE PRESS",
  },
  {
    id: "5",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Spain",
  },
  {
    id: "6",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "IN THE PRESS",
  },
  {
    id: "7",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Australia",
  },
  {
    id: "8",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Spain",
  },
  {
    id: "9",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "IN THE PRESS",
  },
  {
    id: "10",
    image:
      "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
    Heading: "Niagara Falls… The Most Underrated Place in the World?",
    date: "January 12, 2015 9:53 AM",
    description:
      "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
    category: "Australia",
  },
];
