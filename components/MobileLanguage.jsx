import React from "react";

function MobileLanguage({ setModal }) {
  return (
    <div className="absolute top-10 left-0   w-[100%] h-[500px] sm:hidden  flex items-center justify-center ">
      <div className="bg-white w-[80%] m-auto h-[100%] p-5 rounded-md overflow-y-scroll">
        <div className="p-2 border-b-2 border-gray-300 flex items-center justify-between">
          <p className="font-semibold text-black">Choose a Language</p>
          <div
            className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer"
            onClick={() => setModal("hamburger")}
          >
            <span>{"X"}</span>
          </div>
        </div>

        <div className=" grid grid-cols-2 mobile-modal-language">
          {languageData.map((data,ind) => {
            return (
              <div className="flex p-5 w-[100%] hover:bg-gray-200" key={`MobileLanguage${ind}`}>
                <div className="h-[24px] w-[24px] ">
                  <img className="rounded-full" src={data.image}></img>
                </div>
                <div className="ml-1">
                  <p>{data.languageName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileLanguage;

const languageData = [
  {
    id: "1",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "2",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "3",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "4",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "5",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "6",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "7",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "8",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "9",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "10",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "11",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "12",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "13",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "14",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "15",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "16",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "17",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "18",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "19",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "20",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "21",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },

  {
    id: "22",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "23",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "24",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "25",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "26",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "27",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "28",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "29",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "30",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "31",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "32",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "33",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "34",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "35",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "36",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "37",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "38",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "39",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
  {
    id: "40",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png",
    languageName: "English",
  },
];
