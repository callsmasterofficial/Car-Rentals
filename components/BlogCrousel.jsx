import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogThreeCards from "./BlogThreeCards";
import LeftArrowIcon from "./Icons/LeftArrowIcon";
import RightArrowIcon from "./Icons/RightArrowIcon";

export default function BlogCarousel() {
  const options = {
    dots: true,
    infinite: true,
    autoplay: true,
  autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="lg:flex items-center  lg:col-span-12  lg:justify-center lg:align-center w-[90%]  mx-auto lg:w-[80%] helpArea">
        <div className="lg:col-span-8 lg:w-[67%] lg:mr-4	">
          <div className="mt-12 lg:mb-12 CrouselArea CrouselAreaMobile">
            <div className="">
              <div className="blogcarouselslider">
                <Slider {...options}>
                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/winter-driving/driving-in-snow-2-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2 left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/Ireland/dublin-2-ireland-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2 left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/USA/florida/winter-fireworks-florida-usa-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2 left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/UK/brighton-england-uk-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2 left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/USA/Steamboat-skier-usa-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2 left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="BlogCrousalImage"
                      src="https://cdn2.rcstatic.com/images/seo_graphics/winter-driving/driving-in-snow-2-800-359.jpg"
                    />
                    <div className="absolute left-0 top-4 bg-green-900 h-8 p-1 opacity-75 text-white		">
                      <h1>TIPS AND ADVICE</h1>
                    </div>
                    <div className="md:absolute p-2  left-10 bottom-4 bg-black h-20 md:p-4 opacity-75 text-white		">
                      <h1>OUR TOP WINTER DRIVING TIPS</h1>
                      <p className="text-xs	">December 1,2015 4:20pm</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 blogCrousel">
          <BlogThreeCards />
        </div>
      </div>
    </>
  );
}

const BlogCrouselData = [
  {
    img: "https://cdn2.rcstatic.com/images/seo_graphics/winter-driving/driving-in-snow-2-800-359.jp",
  },
];
