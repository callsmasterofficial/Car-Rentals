import React from 'react'
import { useTranslation } from 'next-i18next';




function CardsArea() {
  const { t } = useTranslation('common');

  return (
    <div className="lg:grid lg:grid-cols-4 mb-5 mt-12 cards-area w-[90%] mx-auto lg:w-[80%] CardArea2">
      <div className="col-span-2 mt-5 border border-gray-200 rounded-lg lg:mr-6">
        <div className="sm:flex cardsArea-container">
       <div className='col-span-1 p-2'>
        <img className="max-w-none h-[100px]" 
        src="./Images/Clean-cars.png"  
               alt="Imge Not Found"/>
       </div>

       
       <div className='col-span-1 p-4'>
        <h1 className="text-xl font-bold">
        {t("cardsAreaHeading1")}
        </h1>
        <p className="text-[16px] my-2">
        {t("cardsAreaData1")}
        </p>
        <p className=" hover:underline text-blue-500 cursor-pointer text-[16px]">
        {t("cardsAreaFind")}
        </p>
       </div>
       </div>
      </div>
      <div className="col-span-2  mt-5 border border-gray-200 rounded-lg lg:ml-6">
      <div className="sm:flex cardsArea-container">
       <div className='col-span-1 sm:p-2'>
        <img className="max-w-none h-[100px]" 
        src="./Images/mail.png"  
        alt="Imge Not Found"/>
       </div>

       
       <div className='col-span-1 p-1 sm:p-4'>
        <h1 className="text-xl font-bold">
        {t("cardsAreaHeading2")}
        </h1>
        <div className=" sm:my-2 my-1">
        <input type="text" className="form-control border border-gray-500 rounded-sm sm:p-2 mt-2 p-2 w-[180px]" placeholder={("cardsAreaEmail")}></input>
       <button type="submit" className="btn btn-primary text-white bg-green-700 border rounded-md hover:bg-green-800 ml-8 p-2 mt-2 cursor-pointer	">{("cardsAreaSignUp")}</button>
        </div>
       </div>
       </div>
      </div>
    </div> 
     )
}

export default CardsArea