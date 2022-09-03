import React from "react";
import Person from "./Icons/Person";
import LargeBag from "./Icons/LargeBag";
import SmallBag from "./Icons/SmallBag";

function CarCardArea({image, person, smallBag, largeBag }) {
  //   const [isActive, setIsActive] = useState(false);
    
  return (
    <>
            <div className="border lg:w-[250px] lg:h-[270px] rounded-md  mt-3">
              <div className="my-4">
                <img
                  className="mx-auto"
                  src={image}
                />
              </div>
              <div className="text-center text-lg font-bold">
                Car Heading
                <span className="text-[12px] ml-1">or similar</span>
              </div>
              <div>
                <div className="flex pr-5 pl-12 pb-2">
                  <Person />
                  <p className="ml-1">{person}</p>
                </div>
               { largeBag.length !== 0 &&  <div className="flex pr-5 pl-12 pb-2">
                  <LargeBag />
                  <p className="ml-1"> {largeBag}</p>
                </div>
                }

                {smallBag.length !==0  && (
                <div className="flex pr-5 pl-12 pb-2">
                  <SmallBag />
                  <p className="ml-1">{smallBag}</p>
                </div>
                )}
              </div>
            </div>
    </>
  );
}

export default CarCardArea;

