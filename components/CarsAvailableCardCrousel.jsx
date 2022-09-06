import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Recommended from "./Recommended";
import RightArrowIcon from './Icons/RightArrowIcon';
import LeftArrowIcon from './Icons/LeftArrowIcon';
import CarsAvailableCard from "./CarsAvailableCard";
// import NextTripArea from "./NextTripArea"
// import Data from "./NextTripConst"

export default function CarsAvailableCardCrousel() {
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
    <div className="mt-12 w-[90%] mx-auto lg:w-[80%] CarsAvailableCrousel">

      <div className="Crousal-heading flex justify-between ">
        <h2 className="text-center text-lg font-bold my-3">Cars Available </h2>
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
        {data.map((data,index)=>
        
          <CarsAvailableCard  key={`CarsAvailableCardCrousel${index}`}
                    data={data}/>
        
        )} 
 
      {/* {Data.map((tripData)=>(
        <CarsAvailableCard imgsrc={tripData.imgSrc} heading={tripData.heading} imgText={tripData.imgText}/>
      )) } */}
      </Slider>
      </div>
      </div>

      </>
  );
}


const data = [
  {
      carImg: "https://cdn2.rcstatic.com/images/car_images/new_images/jeep/grand_cherokee.jpg",
      carName: "INNOVA"
  },

  {
      carImg: "https://taxiservice247.com/images/cars/swift.jpg",
      carName: "SWIFT"
  },

  {
      carImg: "https://taxiservice247.com/images/cars/toyota-etios.jpg",
      carName: "TOYOTA-ETIOS"
  },

  {
      carImg: "https://taxiservice247.com/images/cars/tata-indigo.jpg",
      carName: "TATA-INDIGO"
  },
  
  {
      carImg: "https://taxiservice247.com/images/cars/indica.jpg",
      carName: "INDICA"
  },

  {
      carImg: "https://taxiservice247.com/images/cars/tempo.jpg",
      carName: "TEMPO"
  },


]

// import React from 'react'

// function CarAvailableCardCrousel() {
//   return (
//     <div>CarAvailableCardCrousel</div>
//   )
// }

// export default CarAvailableCardCrousel