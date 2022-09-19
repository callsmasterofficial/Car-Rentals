import React from "react";
import { useTranslation } from "next-i18next";

function Cards() {
  const { t } = useTranslation("common");

  return (
    <div className="mt-12 lg:grid grid-cols-6 lg:mb-5 lg:mt-20 w-[90%] mx-auto lg:w-[80%] border border-gray-200 rounded-lg CardsArea">
      <div className="col-span-2 mt-5">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="./Images/Flexible-rentals.png"
              alt="Imge Not Found"
            />
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">{t("cardHeading1")}</h1>
            <p className="text-[16px] my-2">{t("cardData1")}</p>
            <p className=" hover:underline text-blue-500 cursor-pointer text-[16px] ">
              {t("cardFind")}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2  mt-5 ">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="./Images/No-hidden-fees.png"
              alt="Imge Not Found"
            />
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">{t("cardHeading2")}</h1>
            <div>
              <p className="text-[16px] my-2">{t("cardData2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2  mt-5 ">
        <div className="flex">
          <div className="col-span-1 p-2">
            <img
              className="max-w-none"
              src="./Images/Price-Match-Guarantee.png"
              alt="Imge Not Found"
            />
          </div>

          <div className="col-span-1 p-2">
            <h1 className="text-xl font-bold">{t("cardHeading3")}</h1>
            <div>
              <p className="text-[16px] my-2">{t("cardData3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
