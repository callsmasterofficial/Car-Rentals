import React from "react";

function Language({ modal, setModal }) {
  return (
    <>
      <div className="absolute top-16 bg-white hidden sm:block    h-[65vh] w-[85vw]  left-24 right-24   rounded-md p-6 overflow-auto ">
        {/* <div>
        <h1 className="font-bold border-b-2 py-4">Choose a Language</h1>
      </div> */}

        <div className="p-2 border-b-2 border-gray-300 flex items-center justify-between">
          <p className="font-semibold text-black">Choose a Language</p>
          <div
            className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer"
            onClick={() => setModal("")}
          >
            <span>{"X"}</span>
          </div>
        </div>

        <div className=" grid grid-cols-4">
          {languageData.map((data) => {
            return (
              <div className="flex p-5 w-[100%] hover:bg-gray-200">
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
    </>
  );
}

export default Language;

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
