import React from "react";

function ManageBooking({setModal}) {
  return (
    <div className="flex items-center justify-center my-4 manage-booking-mobile manageBooking">
      <div className="flex-1">
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.24.2/illustrations-traveller/TripsCarRentalManageMyAccount.png">
        </img>
      </div>
      <div className="border-2 border-gray-300 rounded-md flex-1">
        <h1 className="text-xl font-bold px-6 py-2">Manage my booking</h1>
        <p className="px-6 py-2">
          Just fill in your details to confirm a quote – or to view, change or
          cancel a booking.
        </p>
        <form >
          <div className="px-6 ">
            <label>Email</label>
          </div>
          <div className="px-6">
            <input type="text" className="form-control border border-gray-500 rounded-sm p-1 w-[100%] "/>
          </div>

          <div className="px-6 pt-4">
            <label>Booking reference number</label>
          </div>
          <div className="px-6">
            <input type="text" className="form-control border border-gray-500 rounded-sm p-1 w-[100%]" />
          </div>
          <div className="px-6 py-4">
          <button>Don&apos;t have your booking reference number?</button>
          </div>
          <div className="text-center px-6 py-4 ">
          <button className="text-white p-2 w-[100%] bg-green-600 hover:bg-green-800 rounded">Find my booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageBooking;
