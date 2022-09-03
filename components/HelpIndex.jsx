import React, { useState } from "react";
import Modal from "./Modal";
import Play from "./Play";
import Language from "./Language";

function HelpIndex() {
    const [modal, setModal] = useState("");

  return (
<>
<div className="bg-red-700 relative">
        <div className="Background-style mx-auto lg:w-[80%] mainHeader ">
          <Play modal={modal} setModal={setModal} />
          {modal === "currency" && <Modal setModal={setModal} />}
          {modal === "language" && <Language setModal={setModal} />}
        </div>
      </div>
</>
  )
}

export default HelpIndex