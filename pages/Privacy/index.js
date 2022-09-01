import React, {useState} from 'react'
import PrivacyStatement from '../../components/PrivacyStatement'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import Play from '../../components/Play'
import Language from "../../components/Language"

function index() {
  const [modal, setModal] = useState("")

  return (
    <>
    <div  className="bg-red-700 relative"> 
    <div className='Background-style mx-auto lg:w-[80%]  '>
      <Play modal={modal} setModal={setModal}  />
      {modal === "currency" && <Modal   setModal={setModal}/> } 
      {modal === "language" && <Language setModal={setModal}/> } 
    </div>
    </div>
    <div className="w-[90%] mx-auto lg:w-[80%]">
            <PrivacyStatement/>
    </div>
    <Footer/>
    </>
  )
}

export default index