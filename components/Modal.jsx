import React from "react";
import CurrencyCard from "./CurrencyCard";

function Modal({setModal}) {
  return (

    <div className="absolute top-16 bg-white hidden sm:block shadow-sm shadow-gray-300    h-[85vh] w-[85vw]  left-24 right-24   rounded-md p-6 overflow-auto modalArea">

      <div className="p-2 border-b-2 border-gray-300 flex items-center justify-between">
        <p className="font-semibold text-black">Select Currency</p>
        <div className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer" onClick={()=>setModal("")}>
        <span >{"X"}</span>
        </div>
      </div>

     

     

      <div className="topCurrencies p-2 font-semibold text-black">
        <p>Top Currencies</p>
      </div>
      <div className="grid grid-cols-4">
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
      </div>

      <div className="topCurrencies p-2 font-semibold text-black">
        <p>Top Currencies</p>
      </div>

      <div className="grid grid-cols-4">
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
      </div>
    </div>
  );
}

export default Modal;

