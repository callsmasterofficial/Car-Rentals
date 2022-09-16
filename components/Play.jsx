import React from "react";
import Hamburger from "./Icons/Hamburger";
import Cross from "./Icons/Cross"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';


function Play({modal, setModal }) {
  const { t } = useTranslation('common');

  const router = useRouter()
  // const [isActive, setIsActive] = useState(false);
   
  return (  
    <div className="flex justify-between mx-auto  ">
      <div className="mobile-pdding">
        <Link href="/">
        <img className="header-icon cursor-pointer " src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"></img>
        </Link>
      </div>



      <div className="flex items-center">
        <div className=" sm:hidden mr-5  cursor-pointer"  >
          {modal !== "hamburger" && <Hamburger  setModal={setModal}/>}
        </div>
        <div className="Header-Hamburger">
        <button  className="text-white p-2"   onClick={()=> setModal("currency")}>{t("PlayCurrency")}</button>

        </div>
        <div className="Header-Hamburger">
        <button className="p-2" onClick={() => setModal("language")}>
            <img className="rounded-full w-5"
             src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png" ></img>
        </button>
        </div>
        <div className="Header-Hamburger">
          
        <button className="bg-gray-100 rounded p-2 m-3 text-blue-500" onClick={()=>router.push("/manage")}>{t("PlayManageBooking")}</button>
        </div>


      </div>
    </div>
  );
}

export default Play;
