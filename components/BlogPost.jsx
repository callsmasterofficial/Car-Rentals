import React from "react";
import BlogSocial from "./BlogSocial";
import BlogPopularArticals from "./BlogPopularArticals";
import BlogNavbar from "./BlogNavbar";
import Facebook from "./Icons/Facebook";
import Pinterest from "./Icons/Pinterest";
import Plus from "./Icons/Plus";
import Youtube from "./Icons/Youtube";
import Share from "./Icons/Share";
import Twitter from "./Icons/Twitter";
import Time from "./Icons/Time";

function BlogPost() {
  return (
    <>
      <div className="lg:flex lg:col-span-12 mt-5 w-[90%]  mx-auto lg:w-[80%] helpArea">
        <div className="lg:col-span-8 lg:w-[70%] lg:mr-4	">
          <div className="border mt-5 ">
            <div className=" hover:cursor-pointer	">
              <img
                className="h-[100%] w-[100%]"
                src="https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg"
              />
            </div>

            <div className="p-10">
              <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	">
                Niagara Falls… The Most Underrated Place in the World?
              </h1>
              <div className="sm:flex">
                <div className=" flex align-center mt-3 mb-3 ml-[-10px] blogPostMobile">
                  <div className="text-gray-500 h-[30px] w-[30px] ml-2 hover:cursor-pointer ">
                    <Time className="mx-auto my-auto" />
                  </div>
                  <div>
                    <p className="text-sm	text-gray-500 hover:cursor-pointer hover:text-blue-500 p-1">
                      January 12, 2015 9:53 AM
                    </p>
                  </div>
                </div>
                <div className="flex align-center mt-3 mb-3 ">
                  <div className="text-gray-500 h-[30px] w-[30px] sm:ml-2 hover:cursor-pointer p-1 ">
                    <Share className="mx-auto my-auto" />
                  </div>
                  <div className="mr-5 p-1">
                    <p>Share</p>
                  </div>
                  <div className="bg-[#dadada] h-[30px] w-[30px] hover:bg-[#39569c] hover:cursor-pointer">
                    <Facebook className="mx-auto my-auto" />
                  </div>
                  <div className="bg-[#dadada] h-[30px] w-[30px] ml-2 hover:bg-[#1DA1F2] hover:cursor-pointer ">
                    <Twitter className="mx-auto my-auto" />
                  </div>
                  <div className="bg-[#dadada] h-[30px] w-[30px] ml-2 hover:bg-red-600 hover:cursor-pointer">
                    <Plus />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="mt-2 mb-2">
                  Are you tired of fighting your way through crowds at tourist
                  hotspots and queuing to see the attractions? You’re not alone
                </p>
                <p className="mt-2 mb-2">
                  Our research found that 60% of people are keen to find
                  somewhere off the beaten track, while 34% of people prefer to
                  visit multiple places when on holiday and renting a car is the
                  perfect way to do this.
                </p>
              </div>
              <div>
                <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/driving-abroad-800-534.jpg" />
              </div>
              <div>
                <p className="mt-2 mb-2">
                  We&#39;ve created a quiz — 'Worldwide… where?' — to celebrate
                  those beautiful but lesser-known locations around the globe.
                </p>

                <p className="mt-2 mb-2">
                  Guest travel bloggers sent us images of their favourite hidden
                  travel spots, and it&#39;s your job to guess where in the world
                  these secret escapes are located. Take the quiz.
                </p>
                <p className="mt-2 mb-2">
                  A special thank you to the travel bloggers who submitted their
                  images for our quiz. View their blogs: Surf Sistas, The What
                  Now Blog, Dream In Pink, Hannah&#39;s Little Corner, Wild
                  Swimming, As a Blonde, Aurora Stories and Sunnydei.
                </p>
                <p className="mt-2 mb-2">
                  Our research also revealed the most overrated and underrated
                  locations across the globe, the 10 countries with the weirdest
                  driving laws and the safest destinations for holiday drivers.
                </p>
              </div>

              <div className="text-xl font-bold hover:cursor-pointer hover:text-blue-500 mt-4">
                <h1>Las Vegas voted most overrated location</h1>
              </div>
              <p className="mt-2 mb-2">
                When asked which destinations you believed to be the most
                overrated, the city often known as &#39;Sin City&#39; took the number
                one spot, with 23% of people voting the Las Vegas Strip as
                overrated.
              </p>

              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/las-vegas-strip-2-usa-800-533.jpg" />
              <p className="mt-2 mb-2">
                While most people have high expectations of the world-famous US
                city with the slogan 'what happens in Vegas, stays in Vegas', it
                seems the promise of wild days and crazy nights isn&#39;t always a
                reality.
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/las-vegas-strip-3-usa-800-533.jpg" />
              <p className="mt-2 mb-2">
                The 'City That Never Sleeps' followed closely in second place,
                with 22% of those surveyed voting Times Square, NYC, as
                overhyped.
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/times-squre-new-york-city-usa-800-533.jpg" />
              <p className="mt-2 mb-2">
                Following in third place is the so-called &#39;dream location&#39;,
                Disney World Orlando, with 19% stating it didn&#39;t live up to
                expectations.
              </p>
              <img
                className="mx-auto"
                src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/disney-world-orlando-florida-usa-500-705.jpg"
              />
              <p className="mt-2 mb-2">
                In contrast, Niagara Falls took the top spot for the most
                underrated location, with 16% feeling this destination deserved
                more credit.
              </p>
              <img src=" https://www.rentalcars.com/images/seo_graphics/worldwide-where/niagara-falls-canada-800-533.jpg" />
              <p className="mt-2 mb-2">
                Other locations regarded as underrated included:
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/notre-dame-cathedral-paris-france-800-554.jpg" />
              <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	mt-2 mb-2">9 weirdest driving laws in the world</h1>
              <p className="mt-2 mb-2">
                83% of motorists claim to research driving abroad before they
                hit the road, but how well do you know international driving
                laws?
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/texting-while-driving-800-533.jpg" />
              <p className="mt-2 mb-2">
                Our research revealed that 85% of women would take the time to
                read the rules of driving abroad, compared to only 80% of men.
              </p>
              <p className="mt-2 mb-2">
                The research also revealed that younger travellers, aged 25–34,
                were more likely to do the research (90%), while those aged
                45–54 were least likely (73%).
              </p>

              <div className="bg-[#eaf5fc] p-10 border-l-8 border-[#2d9edf]	">
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	">
                  Bizzaree Driving laws:{" "}
                </h1>

                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Spain
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                  <li>
                    Just 37% of motorists visiting Spain knew this, despite 67%
                    of them claiming to have researched their driving laws.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500 my-5	">
                  France
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  USA
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Republic of Ireland
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Italy
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500 my-5	">
                  Germany
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Portugal
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Netherlands
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  Greece
                </h1>
                <ul className="list-disc">
                  <li>
                    In some towns and cities, you are only permitted to park on
                    certain sides of the road.
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">
                  The safest cities for holiday drivers
                </h1>
              </div>
              <p className="mt-2 mb-2">Do you feel safe driving abroad?</p>

              <p className="mt-2 mb-2">
                Our research revealed that 68% of people have hired cars when
                abroad, but in which countries do we feel at ease getting behind
                the wheel?
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/car-rental-sign-800-533.jpg" />
              <p className="mt-2 mb-2">
                The Netherlands, USA and Republic of Ireland are the top three
                countries where UK motorists feel safest driving. 30% feel that
                Dutch motorists are safe, 15% trust American drivers, and a
                further 13% feel safe on the roads with Irish motorists.
              </p>
              <p className="mt-2 mb-2">
                Holiday makers also voted drivers to be &#39;OK&#39; on the roads in
                Spain (65%), France (61%), and Portugal (59%). However, those
                driving in Greece believe extra caution is needed, with 46%
                claiming there are unsafe drivers on the road, while 44% would
                also take care driving in Italy
              </p>
              <img src="https://www.rentalcars.com/images/seo_graphics/worldwide-where/driving-in-italy-800-533.jpg" />
              <p className="mt-2 mb-10">
                Discover the hidden treasures countries have to offer and
                explore at your leisure by renting a hire car at Rentalcars.com!
              </p>

              {/* <a className=" underline hover:cursor-pointer hover:text-blue-500">
                Read More
              </a> */}

              <div className="mt-2 mb-2 border-t-4	">
               <h1 className="text-xl font-bold hover:cursor-pointer hover:text-blue-500	my-5">Related Articles</h1>
               <ul>
                <li className="hover:text-blue-500 text-gray-500"><a>&gt;UK Driving Licence Changes, June 2015</a></li>
                <li className="hover:text-blue-500 text-gray-500"><a>&gt;Rentalcars.com Nominated for Two World Travel Awards</a></li>
                <li className="hover:text-blue-500 text-gray-500"><a>&gt;Rentalcars.com has The World's Leading Car Rental Company App 2015</a></li>
                <li className="hover:text-blue-500 text-gray-500"><a>&gt;Meet Glen The Guru</a></li>
                <li className="hover:text-blue-500 text-gray-500"><a>&gt;Car Hire 3000 – Cheap Car Hire</a></li>

               </ul>
   



              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          {/* <div className="w-100%">
          <BlogNavbar />
          </div> */}
          <div className="border p-4 mt-5">
            <BlogSocial />
            <BlogPopularArticals />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;

// const BlogCardData = [
//     {
//       id: "1",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "IN THE PRESS",
//     },
//     {
//       id: "2",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Australia",
//     },
//     {
//       id: "3",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Spain",
//     },
//     {
//       id: "4",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "IN THE PRESS",
//     },
//     {
//       id: "5",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Spain",
//     },
//     {
//       id: "6",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "IN THE PRESS",
//     },
//     {
//       id: "7",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Australia",
//     },
//     {
//       id: "8",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Spain",
//     },
//     {
//       id: "9",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "IN THE PRESS",
//     },
//     {
//       id: "10",
//       image:
//         "https://cdn2.rcstatic.com/images/seo_graphics/worldwide-where/niagara-falls-2-canada-800-359.jpg",
//       Heading: "Niagara Falls… The Most Underrated Place in the World?",
//       date: "January 12, 2015 9:53 AM",
//       description:
//         "A great destination for a sunny city break, Malaga has something to offer everyone. Rich in history and culture, the city has plenty for you to discover. We’ve taken a look at some of Malaga’s must-see attractions, and suggested some great places along the Costa del Sol for you to take a drive to.",
//       category: "Australia",
//     },
//   ];
