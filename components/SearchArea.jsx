import React, { useState } from "react";
import Search from "./Icons/Search";
import Calender from "./Icons/Calender";
import Time from "./Icons/Time";
import Check from "./Icons/Check";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from 'next-i18next';


function SearchArea({ location }) {
  const { t } = useTranslation('common');

  const [driverAge, setDriverAge] = useState(false);
  const [dropOff, setdropOff] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const myfun = (date) => {
    setStartDate(date);
    let endDate = document.querySelector(".endDate").focus();
  };

  console.log(endDate);

  const SearchiconStyle = "absolute w-5 h-6 top-[5px] left-2 mt-[18px]";
  const CalendericonStyle = "absolute w-5 h-6 top-[5px] left-2 mt-[18px]";
  const TimeIconStyle = "absolute w-5 h-6 top-[5px] left-2 mt-[18px]";
  const CheckIconStyle = "w-5 h-6 top-[5px] left-2 mt-[5px] mr-[4px]";

  return (
    <>
      <div className="mx-auto SearchArea-width  ">
        <div>
          <h1 className="text-white font-bold	text-3xl mobile-pdding header-heading">
          {t("searchAreaHeaderHeading")}

          </h1>
        </div>
        <div className="flex">
          <div className="mobile-pdding header-checkbox lg:p-2">
            <input
              type="checkbox"
              className="w-[15px] h-[15px]"
              onClick={() => setdropOff(!dropOff)}
            />
            <label className="text-white">
              {" "}
              {t("searchAresaCheckbox1")}
            </label>
            <br></br>
          </div>

          <div className="driverCheckBox  items-center  mobile-pdding driver-age-mobile header-checkbox ml-10">
            <input
              type="checkbox"
              className="w-[15px] h-[15px]"
              onClick={() => setDriverAge(!driverAge)}
            />
            <label className="text-white ml-1">{t("searchAreaCheckbox2")}</label>
            <br></br>
            {driverAge && (
              <div className="driverAge">
                <label className="text-white ml-5">{t("searchAreaDriverAge")}</label>

                <input
                  type="number"
                  className="form-control w-12 px-1  outline-none text-black border border-gray-500 rounded-sm ml-2 "
                ></input>
              </div>
            )}
          </div>
        </div>
        <div className="SearchBar mobile-pdding-Search  header-heading ">
          <div className="relative border-[16px] mobile-border border-[#ffb700] Search-Area-Border-top Search-Area-Border-left">
            <div>
              <input
                type="text"
                className="form-control  pl-8  w-[100%] SearchArea outline-none pt-[14px]"
                placeholder={t("searchAreaPickUp")}
                value={location ? location : ""}
              ></input>
              <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
              {t("searchAreaPickUp")}
              </label>
            </div>
            <Search SearchIcon={SearchiconStyle} />
          </div>

          {dropOff && (
            <div className="relative border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700] border-style">
              <div>
                <input
                  type="text"
                  className="form-control   px-8  w-[100%] SearchArea outline-none pt-[14px]"
                  placeholder={t("searchAreaDropOff")}
                ></input>
                <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
                  {t("searchAreaDropOff")}
                </label>
              </div>
              <Search SearchIcon={SearchiconStyle} />
            </div>
          )}
          <div className="Calender-Time">
            <div className="relative border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700]  border-style Calender-Time-Style ">
              {/* <input
                type="text"
                className="form-control  pl-8  w-[100%] SearchArea"
                placeholder="Pick-up Date"
              ></input> */}
              <div className="relative ">
                <DatePicker
                  className="pl-8 SearchArea pt-4"
                  dateFormat="EEE d MMM"
                  selected={startDate}
                  onChange={myfun}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
                  {t("searchAreaPickUpDate")}
                </label>
              </div>
              <Calender CalenderIcon={CalendericonStyle} className="mt-[5px]" />
            </div>

            <div className="relative border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700] border-style mobile-border-left">
              {/* <input
                type="text"
                className="form-control  px-8 w-[100%] SearchArea"
                placeholder="Time"
              ></input> */}
              <div className="relative ">
                <DatePicker
                  className="pl-8 pr-4 w-[100%] SearchArea pt-4"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
                <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
                {t("searchAreaPickUpTime")}
                </label>
              </div>
              <Time TimeIcon={TimeIconStyle} />
            </div>
          </div>
          <div className="Calender-Time">
            <div className="relative border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700] border-style Calender-Time-Style ">
              {/* <input
                type="text"
                className="form-control border   pl-8 w-[100%] SearchArea"
                placeholder="Drop-off Date"
              ></input> */}
              <div className="relative">
                <DatePicker
                  className="pl-8 SearchArea pt-4 endDate"
                  dateFormat="EEE d MMM"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
                <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
                {t("searchAreaDropOffDate")}
                </label>
              </div>
              <Calender CalenderIcon={CalendericonStyle} />
            </div>
            <div className="relative border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700] border-style mobile-border-left">
              {/* <div>
              <label className="absolute	">hello</label>
              </div> */}

              <div className="relative ">
                <DatePicker
                  className="pl-8 pr-4 w-[100%] SearchArea pt-4 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />

                <label className="absolute text-[14px]  font-bold top-0  left-0 text-center pr-1  text-gray-500 ml-[10px]">
                {t("searchAreaDropOffTime")}
                </label>
              </div>
              <div></div>
              <Time TimeIcon={TimeIconStyle} />
            </div>
          </div>

          <div className="border-x-[16px]  border-b-[16px] mobile-border-left-right border-[#ffb700] border-style Search-Area-Border-bottom Search-Area-Border-right">
            <button
              type="submit"
              className="btn btn-primary text-white bg-green-700   hover:bg-[#0d6521]  px-8  w-[100%] SearchArea"
            >
            {t("searchAreaSearch")}

            </button>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex items-center  mobile-pdding driver-age-mobile header-checkbox">
            <input
              type="checkbox"
              className="w-[15px] h-[15px]"
              onClick={() => setDriverAge(!driverAge)}
            />
            <label className="text-white ml-1">{t("searchAreaCheckbox2")}</label>
            <br></br>
            {driverAge && (
              <div className="driverAge">
                <label className="text-white ml-5">{t("searchAreaDriverAge")}</label>

                <input
                  type="number" 
                  className="form-control w-12 px-1  outline-none text-black border border-gray-500 rounded-sm ml-2 "
                ></input>
              </div>
            )}
          </div>
        </div>

        <div className="mobile-pdding flex justify-center header-checkbox">
          <ul className="text-white flex-col justify-center  sm:items-center lg:justify-evenly flex lg:flex-row w-[100%] ">
            <li className="flex items-center ">
              <Check CheckIcon={CheckIconStyle} />
              {t("bannerCaption1")}
            </li>
            <li className="flex 	">
              <Check CheckIcon={CheckIconStyle} />
              {t("bannerCaption2")}
            </li>
            <li className="flex  items-center">
              <Check CheckIcon={CheckIconStyle} />
              {t("bannerCaption3")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchArea;
