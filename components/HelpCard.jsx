import React from 'react'

function HelpCard() {
  return (
<div className="flex items-center justify-center my-4 manage-booking-mobile">
   
      <div className="border-2 border-gray-300 rounded-md flex-1">
        <h1 className="text-xl font-bold px-6 py-2">Need help with a booking</h1>
        <p className="px-6 py-2">
        The quickest way to get help or information is often online. If you fill out these fields, we'll help you find what you're looking for.
        </p>
        <form >
          <div className="px-6 ">
            <label>Email</label>
          </div>
          <div className="px-6">
            <input type="text" className="form-control border border-gray-500 rounded-sm p-1 w-[100%] "/>
          </div>

          <div className="px-6 pt-4">
            <label>Booking  number</label>
          </div>
          <div className="px-6">
            <input type="text" className="form-control border border-gray-500 rounded-sm p-1 w-[100%]" />
          </div>
          <div className="px-6 py-4">
          <button>Don't have your booking reference number?</button>
          </div>
          <div className="text-center px-6 py-4 ">
          <button className="text-white p-2 w-[100%] bg-green-600 hover:bg-green-800 rounded">Geeting support</button>
          </div>
        </form>
      </div>

   
    </div>  
    )
}

export default HelpCard