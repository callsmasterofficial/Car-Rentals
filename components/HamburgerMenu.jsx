import React from "react";
import ManageBooking from "./Icons/ManageBooking";
import MoneyExchange from "./Icons/MoneyExchange";

function HamburgerMenu({modal, setModal}) {
  return (
  
    <div className="absolute top-10 left-0   w-[100%] h-[500px] sm:hidden  flex items-center justify-center">
        <div className="bg-white w-[80%] m-auto h-[100%] p-5 rounded-md">
      <div className="p-2 border-b-2 border-gray-300 flex items-center justify-between">
        <p className="font-semibold text-black">Menu</p>
        <div
          className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer"
          onClick={() => setModal("")}
        >
          {"X"}
        </div>
      </div>

      <div className="flex mt-4">
        <MoneyExchange />
        <div className="ml-1" onClick={() => setModal("mobileModal")}>Indian Rupees</div>
      </div>
      <div className="flex mt-4">
        <img
          className="rounded-full h-[24px] w-[24px] "
          src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png"
        />
        <div className="ml-1" onClick={() => setModal("mobileLanguage")}>English (AU)</div>
      </div>

      <div className="flex mt-4">
        <ManageBooking />
        <div className="ml-1" onClick={() => setModal("manageBooking")}> Manage Booking</div>
      </div>
      </div>
      </div>


  );
}

export default HamburgerMenu;
