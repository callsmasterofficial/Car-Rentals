import React from "react";
import BlogCard from "../../components/BlogCard";
import BlogCarousel from "../../components/BlogCrousel";
import BlogNavbar from "../../components/BlogNavbar";
import BlogPopularArticals from "../../components/BlogPopularArticals";
import BlogPost from "../../components/BlogPost";
import BlogSocial from "../../components/BlogSocial";
import BlogThreeCards from "../../components/BlogThreeCards";
import Footer from "../../components/Footer";

import HelpIndex from "../../components/HelpIndex";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


function index() {
  return (
    <>
      <HelpIndex />

      <div className="lg:bg-[#E6E6E6]">
        <BlogCarousel />
        </div>

        <BlogCard />
        {/* <BlogPost/> */}
      <Footer />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default index;
