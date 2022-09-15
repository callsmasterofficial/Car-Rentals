import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Recommended from "./Recommended";
import RightArrowIcon from './Icons/RightArrowIcon';
import LeftArrowIcon from './Icons/LeftArrowIcon';
import NextTripArea from "./NextTripArea"
import Data from "./NextTripConst"
import { useTranslation } from 'next-i18next';


export default function Carousel() {
  const { t } = useTranslation('common');

  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 8000,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const buttonRef = useRef();
  // console.log(buttonRef);
  return (
    <>
    <div className="mt-12 w-[90%] mx-auto lg:w-[80%] CrouselArea">

      <div className="Crousal-heading flex justify-between">
        <h2 className="text-center text-lg font-bold my-3">{t("crouselRecommendedNextTrip")}</h2>
        <div className="button-style flex justify-end	">
        <div className="previous">
          <button className="Crousal-button my-3" onClick={() => buttonRef.current.slickPrev()}>
          <LeftArrowIcon/>
          </button>
        </div>
        <div className="next">
          <button className="Crousal-button my-3" onClick={() => buttonRef.current.slickNext()}>
          <RightArrowIcon/>
            </button>
        </div>
        </div>
      </div>
      <div className="slider1 overflow-x-hidden	overflow-y-hidden">
      <Slider {...options} ref={buttonRef}> 
      {Data.map((tripData,index)=>(
        <NextTripArea            
         key={`Crousel${index}`}        
        imgsrc={tripData.imgSrc} imgText={tripData.imgText}/>
      )) }
      </Slider>
      </div>
      </div>

      </>
  );
}