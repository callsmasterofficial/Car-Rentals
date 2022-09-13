import React from 'react'

function CarsAvailableCard({data}) {
  return (
    <>
    {/* <div>
        <h1 className="text-xl font-bold my-2"> </h1>
    </div> */}
    <div className=" next-trip-mobile ">
       
      <div className="sm:pr-2 pt-2 pb-2 ">
        <div className="relative overflow-hidden carImgBox ">
          <img className=" rounded-lg object-cover   brightness-50 text-white h-[300px] w-[100%]" src={data.carImg}/>
          <div className="absolute bottom-0 pr-5 pl-5 pb-2 h1div">
            <h1 className="text-xl font-bold text-white " >{data.carName}</h1>
          </div>
        </div>
      </div>
      
    </div>
    </>  )
}
// .car{
//   text-transform: uppercase;
// background: rgba(0, 0, 0, 0.2);
// transition: all ease-in-out 0.4s;
// }

export default CarsAvailableCard
