import React, { useState }  from "react";
import { useRouter } from 'next/router'
import Cookies from './Cookies'


function Footer() {
  const router = useRouter()
  const [modal, setModal] = useState(false);


  return (
    <>
          {/* <div className="w-[100%] md:w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto "> */}
    <div className="mt-12">
      <div className="bg-blue-500">
        <ul className="flex text-white items-center justify-center p-6 flex-wrap">
          <a>
            <li className="hover:underline cursor-pointer		 mr-3" onClick={()=>router.push("/Privacy")}>Privacy Notice</li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	" onClick={()=> setModal(!modal)}>Cookies</li>
          </a>
          {modal && <Cookies modal={modal} setModal={setModal}/>}
          <a>
            <li className="hover:underline mr-3 cursor-pointer	 " >Terms & Conditions</li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	" onClick={()=>router.push("/Help")}>Help</li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	"> Modern Slavery Statement</li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	">
              Supply Partner Enquiry and Marketplace
            </li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	">Affiliated Programme</li>
          </a>
          <a>
            <li className="hover:underline mr-3 cursor-pointer	">Careers</li>
          </a>
        </ul>
      </div>
    </div>
    <div className="w-[90%] mx-auto lg:w-[80%] Footer-main">
    <div className="lg:grid lg:grid-cols-4 lg:footer">
        <div className="col-span-3  mt-5">
        <p>
        Rentalcars.com is a trading name of Booking.com Transport Limited which is a limited company registered in England and Wales (Number: 05179829) whose registered address is at 100 New Bridge Street, London, EC4V 6JA. VAT number: GB 855349007.
        </p>
        <p>Rentalcars.com is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
        </div>
        <div className="col-span-1 ml-28 mt-5 mobile-footer-image object-center	">
        <img className="w-24 object-center	" src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/world-travel-award-2020/desktop/world-travel-award-2020@2x.png"/>
        </div>

    </div>

    <div className="flex justify-evenly p-12 footer-company	">
        <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"/>
        <img src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"/>
        <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"/>
        <img src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"/>
        <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"/>
        <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"/>

    </div>

    <div className="text-center">
    <p>Copyright © 2022 Booking.com Transport Limited trading as Rentalcars.com. All rights reserved </p>
    </div>
    </div>
    {/* </div> */}

    </>

  );
}

export default Footer;
