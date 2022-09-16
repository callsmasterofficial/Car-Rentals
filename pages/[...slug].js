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

// import { serverSideTranslations } from "next-i18next/serverSideTranslations";


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

 
       <Brands/>
      <Cards />
      <CardsArea/>
      <CarCard/>
    
      <TopWorldArea />
      <CloseToAirportArea/>
      <AdditionalAccordian />
   
    <Footer />

    </>
  )
}

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });
export default index