import React, { useState } from 'react';
import UpArrow from "./Icons/UpArrow";
import DownArrow from "./Icons/DownArrow";

const Accordion2 = ({ title, item1, item2, item3,item4,item5,item6,item7,item8,item9,item10}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item p-3">
      <div className="accordion-title flex justify-between" onClick={() => setIsActive(!isActive)}>
        <div className="text-lg">{title}</div>
        <div>{isActive ?  <UpArrow/> : <DownArrow/>}</div>
      </div>
      {isActive && <div className="accordion-content grid grid-cols-4">
        <a className=''>
            {item1}
        </a>
        <p className=''>
            {item2}
        </p>
        <p className=''>
            {item3}
        </p>
        <p className=''>
            {item4}
        </p>
        <p className=''>
            {item5}
        </p>
        <p className=''>
            {item6}
        </p>
        <p className=''>
            {item7}
        </p>
        <p className=''>
            {item8}
        </p>
        <p className=''>
            {item9}
        </p>
        <p className=''>
            {item10}
        </p>
    </div>}
    </div>
  );
};

export default Accordion2;