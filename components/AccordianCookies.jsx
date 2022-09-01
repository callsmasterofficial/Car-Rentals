import React, { useState } from 'react';
import UpArrow from "./Icons/UpArrow";

import DownArrow from "./Icons/DownArrow";


const AccordianCookies= ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordion-item p-3">
        <div className="accordion-title flex" onClick={() => setIsActive(!isActive)}>
        <div className="mt-2">{isActive ? <UpArrow/> : <DownArrow/>}</div>
        <div className="text-lg ml-2">{title}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };


export default AccordianCookies