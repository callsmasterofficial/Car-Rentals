import React from "react";
import Link from "next/link";

function TopWorldArea() {
  return (
    <>
      <div className="grid grid-cols-4 mb-5 topWorldArea w-[90%] mx-auto  mt-12 lg:w-[80%] border border-gray-200 rounded-lg TopWorld">
        <div className="col-span-2  mt-5  mb-auto">
          <div>
            <h1 className="font-bold p-3">Top Worldwide Destinations</h1>
            <div className="flex justify-start   ">
              <div>
                <ul>                  
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/London">London</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/SanFrancisco">San Francisco</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Milan">Milan</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Split">Split</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Barcelona">Barcelona</Link></li>
                </ul>
              </div>
              <div className="sm:ml-28 topWorldArea-Justify topWorldArea-Justify2">
                <ul>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Edinburgh">Edinburgh</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Zurich">Zurich</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Munich">Munich</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Bangkok">Bangkok</Link></li>
                  <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/gb/Florence">Florence</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-5">
          <div>
            <h1 className="font-bold p-3">Top Worldwide Airports</h1>
            
              <div className="flex justify-start 	">
                <div>
                  <ul>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/HeathrowAirport">Heathrow Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/ZurichAirport">Zurich Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/KeflavikAirport">Keflavik Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/Milan MalpensaAirport">Milan Malpensa Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/AmsterdamSchipholAirport">Amsterdam Schiphol Airport</Link></li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/SanFranciscoAirport">San Francisco Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/Edinburgh">Edinburgh Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/LosAngelesAirport">Los Angeles Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/BostonAirport">Boston Airport</Link></li>
                    <li className="p-3 hover:underline text-blue-500 cursor-pointer"><Link href="en/City/Destination/BangkokSuvarnabhumiAirport">Bangkok Suvarnabhumi Airport</Link></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopWorldArea;
