import React from 'react'
import HelpIndex from '../../components/HelpIndex';
import Footer from "../../components/Footer";
import BlogPost from "../../components/BlogPost";



function index({blog}) {
  return (
    <>
<HelpIndex />

{/* <div className="lg:bg-[#E6E6E6]">
  <BlogCarousel />
  </div>

  <BlogCard /> */}
  <BlogPost/>
<Footer />  
</>)
}

export default index