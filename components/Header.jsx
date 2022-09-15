import React, { useState } from 'react'
import Play from './Play'
import SearchArea from './SearchArea'
import Modal from './Modal'
import Language from './Language'
import Hamburger from './Icons/Hamburger'
import HamburgerMenu from './HamburgerMenu'
import MobileModal from './MobileModal'
import MobileLanguage from './MobileLanguage'

function Header({location}) {
  const [modal, setModal] = useState("");
  
  console.log(modal)
  return (
    <div className='header-image opacity-90	relative  '>
       
        <div className='Background-style mx-auto lg:w-[80%] mainHeader '>
          <Play modal={modal} setModal={setModal} />
          <SearchArea location={location} />
        </div>
          {modal === "currency" && <Modal  modal={modal} setModal={setModal}/>}
          {modal === "language" && <Language  modal={modal} setModal={setModal}/>}
          {modal === "hamburger" && <HamburgerMenu modal={modal} setModal={setModal}/>}
          {modal === "mobileModal" && <MobileModal modal={modal} setModal={setModal}/>}
          {modal === "mobileLanguage" && <MobileLanguage modal={modal} setModal={setModal}/>}

          

    </div>
  )
}

export default Header