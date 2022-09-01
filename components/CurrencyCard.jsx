import React from "react";

function CurrencyCard(props) {
  return (
      <div className=" hover:bg-gray-100 p-2 cursor-pointer	">
          <div className="font-semibold text-black ">
            <p>{props.first}</p>
            <p>{props.second}</p>
          </div>
      </div>
  );
}

export default CurrencyCard;
