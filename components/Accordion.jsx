import React, { useState } from 'react';
import UpArrow from "./Icons/UpArrow";

import DownArrow from "./Icons/DownArrow";


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item p-3">
      <div className="accordion-title flex justify-between" onClick={() => setIsActive(!isActive)}>
        <div className="text-lg">{title}</div>
        <div>{isActive ? <UpArrow/> : <DownArrow/>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;