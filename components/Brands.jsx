import React from "react";

function Brands() {
  return (
    
    <div className="Brands-outer mt-12 w-[90%] mx-auto lg:w-[80%]  BrandsArea    ">
      

      <div>
        <h1 className="text-xl font-bold">
          Rentalcars.rent connects you to the biggest brands in car hire.
        </h1>
      </div>
      <div >
        <div className="sm:flex sm:flex-wrap  md:justify-evenly brand-inner grid-cols-2	 sm:mb-4 sm:mt-4 ">
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/greenmotion_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/easirent_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif" alt="Image Not Found"/>
        {/* </div>
        <div className="col-span-2 sm:flex sm:flex-wrap md:justify-evenly"> */}
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/sixt_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/budget_logo_lrg.gif" alt="Image Not Found"/>
          <img className="shadow-2xl" src="https://cdn2.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif" alt="Image Not Found"/>
        </div>

      </div>
    </div>
  );
}

export default Brands;

// className='ml-[165px] mr-40  mt-9'
// flex justify-between mt-8
