import React, { useState } from "react";
import CarCardArea from "./CarCardArea";
import CarCardNavbar from "./CarCardNavbar";

function CarCard() {
  const [car, setCar] = useState("smallCar");
  const carData = CarCardData;
  return (
    <div className="w-[90%] mx-auto lg:w-[80%] mt-12 carCardsArea">
      <CarCardNavbar car={car} setCar={setCar} />
      {/* lg:flex lg:items-center lg:justify-around	 overflow-x-scroll lg:overflow-hidden 
         flex items-center justify-around	
      */}
      <div>




      {car === "smallCar" && (
        <div className="flex justify-around	carCard">
          {carData.slice(0, 4).map((item,index) => (
            <CarCardArea
            key={`CarCard${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "middleClass" && (
        <div className="flex justify-around	carCard">
          {carData.slice(4, 8).map((item,index) => (
            <CarCardArea
            key={`CarCard${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "peopleCarrier" && (
        <div className="flex justify-around	carCard">
          {carData.slice(8, 12).map((item,index) => (
            <CarCardArea
            key={`CarCard1${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "combination" && (
        <div className="flex justify-around	carCard">
          {carData.slice(12, 16).map((item,index) => (
            <CarCardArea
            key={`CarCard1${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "luxury" && (
        <div className="flex justify-around	carCard">
          {carData.slice(16, 20).map((item,index) => (
            <CarCardArea
            key={`CarCard1${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "suv" && (
        <div className="flex justify-around	carCard">
          {carData.slice(20, 24).map((item,index) => (
            <CarCardArea
            key={`CarCard1${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}

      {car === "convertible" && (
        <div className="flex justify-around	carCard">
          {carData.slice(24, 28).map((item,index) => (
            <CarCardArea
            key={`CarCard1${index}`}
              image={item.image}
              person={item.person}
              smallBag={item.smallBag}
              largeBag={item.largeBag}
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default CarCard;

const CarCardData = [
  {
    id: 1,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "",
  },
  {
    id: 2,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "4 seats",
    smallBag: "",
    largeBag: "4 large bag",
  },
  {
    id: 3,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "5 small bag",
    largeBag: "5 large bag",
  },
  {
    id: 4,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 5,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 6,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 7,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/opel/corsa.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 8,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 9,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/vauxhall/zafira.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 10,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 11,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 12,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 13,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 14,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 15,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 16,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 17,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 18,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 19,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 20,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/5_series.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 21,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 22,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/honda/cr-v.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 23,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 24,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 25,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 26,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 27,
    image: "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/x1.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },

  {
    id: 28,
    image:
      "https://cdn2.rcstatic.com/images/car_images/new_images/bmw/2_series_convertible.jpg",
    person: "5 seats",
    smallBag: "1 small bag",
    largeBag: "1 large bag",
  },
];
