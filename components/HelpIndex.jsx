import React, { useState } from "react";
import Modal from "./Modal";
import Play from "./Play";
import Language from "./Language";
import SearchArea from './SearchArea';
import HamburgerMenu from "./HamburgerMenu";
import MobileLanguage from "./MobileLanguage";
import MobileModal from "./MobileModal";

function HelpIndex() {
    const [modal, setModal] = useState("");

  return (
<>
<div className="bg-blue-500 relative">
        <div className="Background-style mx-auto lg:w-[80%] mainHeader ">
          <Play modal={modal} setModal={setModal} />
          {modal === "currency" && <Modal setModal={setModal} />}
          {modal === "language" && <Language setModal={setModal} />}
           {modal === "hamburger" && <HamburgerMenu modal={modal} setModal={setModal}/>}
         {modal === "mobileModal" && <MobileModal modal={modal} setModal={setModal}/>}
         {modal === "mobileLanguage" && <MobileLanguage modal={modal} setModal={setModal}/>}
        </div>
      </div>


</>
  )
}

export default HelpIndex