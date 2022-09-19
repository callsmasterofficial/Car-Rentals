import Head from "next/head";
import Image from "next/image";
import Brands from "../components/Brands";
import Cards from "../components/Cards";
import CardsArea from "../components/CardsArea";
import Footer from "../components/Footer";
import FrequentlyAccordian from "../components/FrequentlyAccordian";
import Header from "../components/Header";
import TopWorldArea from "../components/TopWorldArea";
import Play from "../components/Play";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import SearchArea from "../components/SearchArea";
import Language from "../components/Language";
import HamburgerMenu from "../components/HamburgerMenu";
import MobileLanguage from "../components/MobileLanguage";
import MobileModal from "../components/MobileModal";
import CarCardArea from "../components/CarCardArea";
import CarCardNavbar from "../components/CarCardNavbar";
import CarCard from "../components/CarCard";
import ManageBooking from "../components/ManageBooking";
import PrivacyStatement from "../components/PrivacyStatement";
import NextTripArea from "../components/NextTripArea";
import CarsAvailableCard from "../components/CarsAvailableCard";
import AvailableArea from "../components/AvailableArea";
import Carousel from "../components/Carousel";
import CarsAvailableCardCrousel from "../components/CarsAvailableCardCrousel";
import BlogCard from "../components/BlogCard";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <Carousel />
      <Cards />
      <CardsArea />
      {/* <NextTripArea /> */}
      {/* <CarsAvailableCard /> */}
      <CarsAvailableCardCrousel />
      <TopWorldArea />
      <AvailableArea />
      <FrequentlyAccordian />
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

