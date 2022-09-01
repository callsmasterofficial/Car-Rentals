import React from 'react'
import Brands from "../components/Brands";
import Cards from "../components/Cards";
import CardsArea from "../components/CardsArea";
import Footer from "../components/Footer";
import AdditionalAccordian from "../components/AdditionalAccordian";
import Header from "../components/Header";
import TopWorldArea from "../components/TopWorldArea";
import CarCard from "../components/CarCard";
import CloseToAirportArea from '../components/CloseToAirportArea';

export async function getStaticPaths() {
    
      return {
        paths: [],
        fallback: true,
      }
    
}

export async function getStaticProps(context) {
   const {params:{slug}}=context;
   if(slug.length ===4){
       return {
         props: {
           slug
         },
       }

   }else{
     return {
        notFound:true
     }
   }
  }

function index({slug}) {
    console.log(slug);

    const location = slug ? slug[3]: false;
    console.log(location);

  return (
    <>
    <Header location={location} />

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