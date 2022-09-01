import React from 'react'
import Brands from "../../components/Brands";
import Cards from "../../components/Cards";
import CardsArea from "../../components/CardsArea";
import Footer from "../../components/Footer";
import AdditionalAccordian from "../../components/AdditionalAccordian";
import Header from "../../components/Header";
import TopWorldArea from "../../components/TopWorldArea";
import CarCard from "../../components/CarCard";
import CloseToAirportArea from '../../components/CloseToAirportArea';


function index() {
  return (
    <>
    <Header/>

    <div className="w-[90%] mx-auto lg:w-[80%]">
      {/* <Modal/>  */}
      {/* <Language/>  */}
       <Brands/>
      <Cards />
      <CardsArea/>
      <CarCard/>
      {/* <CardsArea />
      <CarCardNavbar/> */}
      {/* <CarCardArea/> */}
      <TopWorldArea />
      <CloseToAirportArea/>
      <AdditionalAccordian />
      {/* <ManageBooking/> */}
      {/* <PrivacyStatement/> */}
      {/* <Footer /> */}
       {/* <SearchArea/>
      <HamburgerMenu/> */}


      {/* <MobileLanguage/>
      <MobileModal/> */}
    </div>
    <Footer />

    </>
  )
}

export default index