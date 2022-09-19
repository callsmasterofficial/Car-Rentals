import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "./Cookies";
import { useTranslation } from "next-i18next";

function Footer() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* <div className="w-[100%] md:w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto "> */}
      <div className="mt-12">
        <div className="bg-blue-500">
          <ul className="flex text-white items-center justify-center p-6 flex-wrap">
            <a>
              <li
                className="hover:underline cursor-pointer		 mr-3"
                onClick={() => router.push("/Privacy")}
              >
                {t("FooterHeading1")}
              </li>
            </a>
            <a>
              <li
                className="hover:underline mr-3 cursor-pointer"
                onClick={() => setModal(!modal)}
              >
                {t("FooterHeading2")}
              </li>
            </a>
            {modal && <Cookies modal={modal} setModal={setModal} />}
            <a>
              <li className="hover:underline mr-3 cursor-pointer	 ">
                {t("FooterHeading3")}
              </li>
            </a>
            <a>
              <li
                className="hover:underline mr-3 cursor-pointer"
                onClick={() => router.push("/blog")}
              >
                {t("FooterHeading4")}
              </li>
            </a>
            <a>
              <li
                className="hover:underline mr-3 cursor-pointer	"
                onClick={() => router.push("/Help")}
              >
                {t("FooterHeading5")}
              </li>
            </a>
            <a>
              <li className="hover:underline mr-3 cursor-pointer	">
                {t("FooterHeading6")}
              </li>
            </a>
            <a>
              <li className="hover:underline mr-3 cursor-pointer	">
                {t("FooterHeading7")}
              </li>
            </a>
            <a>
              <li className="hover:underline mr-3 cursor-pointer	">
                {t("FooterHeading8")}
              </li>
            </a>
            <a>
              <li className="hover:underline mr-3 cursor-pointer	">
                {t("FooterHeading9")}
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[80%] Footer-main">
        <div className="lg:grid lg:grid-cols-4 lg:footer">
          <div className="col-span-3  mt-5">
            <p>{t("FooterText1")}</p>
            <p>{t("FooterText2")}</p>
          </div>
          <div className="col-span-1 ml-28 mt-5 mobile-footer-image object-center	">
            <img
              className="w-24 object-center	"
              src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/world-travel-award-2020/desktop/world-travel-award-2020@2x.png"
            />
          </div>
        </div>

        <div className="flex justify-evenly p-12 footer-company	">
          <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" />
          <img src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" />
          <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" />
          <img src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" />
          <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" />
          <img src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" />
        </div>

        <div className="text-center">
          <p>{t("FooterText3")}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
