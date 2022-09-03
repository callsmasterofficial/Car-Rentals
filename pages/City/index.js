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

export default index