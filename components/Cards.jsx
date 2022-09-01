import React from "react";

function Cards() {
  return (
    <div className="lg:grid grid-cols-6 lg:mb-5 lg:mt-20 w-[90%] mx-auto lg:w-[80%] border border-gray-200 rounded-lg">
      <div className="col-span-2 mt-5">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_calendar@1x.png"
              alt="Imge Not Found"
            ></img>
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">Flexible rentals</h1>
            <p className="text-[16px] my-2">
              Cancel or change most bookings for free up to 48 hours before
              pick-up
            </p>
            <p className=" hover:underline text-blue-500 cursor-pointer text-[16px] ">
              Find out more
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2  mt-5 ">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_magnifier@1x.png"
              alt="Imge Not Found"
            ></img>
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">No hidden fees</h1>
            <div>
              <p className="text-[16px] my-2">Know exactly what you’re paying</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2  mt-5 ">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_wallet@1x.png"
              alt="Imge Not Found"
            ></img>
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">Price Match Guarantee</h1>
            <div>
              <p className="text-[16px] my-2">
                Found the same deal for less? We’ll match the price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
