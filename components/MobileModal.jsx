import React from 'react'
import CurrencyCard from "./CurrencyCard";
function MobileModal({setModal}) {
  return (
    <div className="absolute top-10 left-0   w-[100%] h-[500px] sm:hidden  flex items-center justify-center ">
        <div className="bg-white w-[80%] m-auto h-[100%] p-5 rounded-md overflow-y-scroll">
        <div className="p-2 border-b-2 border-gray-300 flex items-center justify-between">
        <p className="font-semibold text-black">Select Currency</p>
        <div className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer" onClick={()=>setModal("hamburger")}>
        <span >{"X"}</span>
        </div>
      </div>


      <div className="topCurrencies p-2 font-semibold text-black">
        <p>Top Currencies</p>
      </div>
      <div className="grid grid-cols-2 mobile-modal-language">
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
        <CurrencyCard first="Australia Dollars" second="AUD" />
      </div>


     
      <div className="topCurrencies p-2 font-semibold text-black">
        <p>Top Currencies</p>
      </div>

      <div className="grid grid-cols-2 mobile-modal-language">
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
    </div>
  )
}

export default MobileModal