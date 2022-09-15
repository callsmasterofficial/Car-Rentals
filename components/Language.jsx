import React from "react";

function Language({ modal, setModal }) {
  return (
    <>
    <div className="overlay">
      <div className="absolute top-12 bg-white hidden sm:block sm:ml-[5px]  h-[91vh] w-[50vw]  ml-[445px] Language  rounded-md p-4 overflow-auto languageArea">
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
          {languageData.map((data,index) => {
            return (
              <div className="flex p-3 w-[100%] hover:bg-gray-200"  key={`Language${index}`}>
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
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ee.png",
    languageName: "Eesti",
  },
  {
    id: "3",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/pt.png",
    languageName: "Português (PT)",
  },
  {
    id: "4",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/is.png",
    languageName: "Íslenska",
  },
  {
    id: "5",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/de.png",
    languageName: "Deutsch",
  },
  {
    id: "6",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/au.png",
    languageName: "English(AU)",
  },
  {
    id: "7",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ru.png",
    languageName: "Pусский",
  },
  {
    id: "8",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/cz.png",
    languageName: "Čeština",
  },
  {
    id: "9",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/fr.png",
    languageName: "Français",
  },
  {
    id: "10",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ph.png",
    languageName: "Filipino",
  },
  {
    id: "11",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ro.png",
    languageName: "Română",
  },
  {
    id: "12",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/gr.png",
    languageName: "ελληνικά",
  },
  {
    id: "13",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/es.png",
    languageName: "Español",
  },
  {
    id: "14",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/hr.png",
    languageName: "Hrvatski",
  },
  {
    id: "15",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/sk.png",
    languageName: "Slovenčina",
  },
  {
    id: "16",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/bg.png",
    languageName: "Български",
  },
  {
    id: "17",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/it.png",
    languageName: "Italiano",
  },
  {
    id: "18",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/lv.png",
    languageName: "Latvija",
  },
  {
    id: "19",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/si.png",
    languageName: "Slovenščina",
  },
  {
    id: "20",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ua.png",
    languageName: "Українська",
  },
  {
    id: "21",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/us.png",
    languageName: "English(US)",
  },

  {
    id: "22",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/lt.png",
    languageName: "Lietuvių kalba",
  },
  {
    id: "23",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/rs.png",
    languageName: "Srpski",
  },
  {
    id: "24",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/ae.png",
    languageName: "العربية",
  },
  {
    id: "25",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/il.png",
    languageName: "עברית",
  },
  {
    id: "26",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/hu.png",
    languageName: "Magyar",
  },
  {
    id: "27",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/fi.png",
    languageName: "Suomi",
  },
  {
    id: "28",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/th.png",
    languageName: "ไทย",
  },
  {
    id: "29",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/id.png",
    languageName: "bahasa Indonesia",
  },
  {
    id: "30",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/nl.png",
    languageName: "Nederlands",
  },
  {
    id: "31",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/se.png",
    languageName: "Svenska",
  },
  {
    id: "32",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/jp.png",
    languageName: "日本語",
  },
  {
    id: "33",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/my.png",
    languageName: "Bahasa Malaysia",
  },
  {
    id: "34",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/no.png",
    languageName: "Norsk",
  },
  {
    id: "35",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/tz.png",
    languageName: "Swahili",
  },
  {
    id: "36",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/cn.png",
    languageName: "简体中文",
  },
  {
    id: "37",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/catalonia.png",
    languageName: "Català",
  },
  {
    id: "38",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/pl.png",
    languageName: "Polski",
  },
  {
    id: "39",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/tr.png",
    languageName: "Türkçe",
  },
  {
    id: "40",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/z4.png",
    languageName: "繁體中文",
  },
  {
    id: "41",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/dk.png",
    languageName: "Dansk",
  },
  {
    id: "42",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/br.png",
    languageName: "Português (BR)",
  },
  {
    id: "43",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/vn.png",
    languageName: "Việt",
  },
  {
    id: "44",
    image: "https://cf.bstatic.com/static/img/flags/new/48-squared/kr.png",
    languageName: "한국어",
  },
];
