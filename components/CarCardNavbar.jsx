import React from "react";

function CarCardNavbar({ car, setCar }) {
  return (
    <div>
      <ul className="flex cursor-pointer  rounded-sm  overflow-x-scroll ">
        <li
          className={
            car === "smallCar"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("smallCar")}
        >
          <button className="p-[20px]">small car</button>
        </li>
        <li
          className={
            car === "middleClass"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("middleClass")}
        >
          <button className="p-[20px]">middle class</button>
        </li>
        <li
          className={
            car === "peopleCarrier"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("peopleCarrier")}
        >
          <button className="p-[20px]">people carrier</button>
        </li>
        <li
          className={
            car === "combination"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("combination")}
        >
          <button className="p-[20px]">Combination</button>
        </li>
        <li
          className={
            car === "luxury"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("luxury")}
        >
          <button className="p-[20px]">luxury</button>
        </li>
        <li
          className={
            car === "suv"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("suv")}
        >
          <button className="p-[20px]">SUV</button>
        </li>
        <li
          className={
            car === "convertible"
              ? "ml-5 border-b-2 border-blue-500"
              : "hover:bg-gray-200 ml-5"
          }
          onClick={() => setCar("convertible")}
        >
          <button className="p-[20px]">convertible</button>
        </li>
      </ul>
    </div>
  );
}

export default CarCardNavbar;
