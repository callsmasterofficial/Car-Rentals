import React from "react";
import Cross from "../components/Icons/Cross";
import AccordianCookies from "./AccordianCookies";

function Cookies({ modal, setModal }) {
  return (
    <>
      {" "}
      <div className="overlay">
        <div className="mx-auto my-auto">
        <div className="absolute  bg-white shadow-sm shadow-gray-300  Cookies  sm:h-[90vh] sm:w-[50vw]  item-center  rounded-md p-4 overflow-auto Cookies-mobile ">
          <div className="flex justify-between	border-b-2">
            <div className="mobile-pdding">
              <img
                className="header-icon w-[120px] h-[40px] "
                src="https://cdn.cookielaw.org/logos/static/ot_logo.png"
              />
            </div>
            <div
              className="text-black h-6 w-6 hover:bg-gray-300 flex items-center justify-center rounded-sm cursor-pointer"
              onClick={() => setModal("")}
            >
              <span>{"X"}</span>
            </div>
            {/* <div className="header-icon">
          <Cross />
        </div> */}
          </div>

          <div>
            <h1 className="font-bold text-black">Privacy Preference Center</h1>
            <p className="text-black">
              When you visit a website, it can retrieve or store information
              about your browser. This usually takes the form of cookies. This
              can be information about you, your settings or your device. The
              information is mostly used to ensure that the website works as
              expected. This information does not normally identify you
              directly. However, this can offer you a more personalized web
              experience. Because we respect your right to privacy, you can
              choose not to allow certain types of cookies. Click on the
              different category headings to learn more and change our default
              settings. Further information
            </p>
          </div>

          <div>
            <h1 className="font-bold text-black">Manage Consent Preferences</h1>
          </div>

          <div className="col-span-2 mt-5 border border-gray-600 rounded-lg mb-auto lg:mr-6 text-black">
            <div className="m-3">
              <h1 className="font-bold p-3 divide-y">
                Frequently Asked Questions
              </h1>
              <div className="accordion  divide-y">
                {accordionData.map(({ title, content, ind }) => (
                  <AccordianCookies
                    title={title}
                    content={content}
                    key={`Cookies${ind}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end m-5">
            <button className="bg-green-600 text-white p-2">
              Confirm my Choice
            </button>
          </div>
          <div className="bg-gray-300 h-6 flex justify-end">
            <img
              className="p-1 pl-5"
              src="https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg"
            />
          </div>
        </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center w-full mb-12" /> */}
      {/*   
    <div className="relative">
      <input type="checkbox" id="toggleB" className="sr-only"/>
      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition">

      </div>
    </div> */}
      {/* <label
        for="checked-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          className="sr-only peer"
          checked
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label> */}
    </>
  );
}

export default Cookies;

const accordionData = [
  {
    title: "Functional cookies",
    content: `Functional cookies make our site work properly. Through them you can create an account, log in and manage your bookings. They remember your chosen currency, language, past searches and other preferences. These technical cookies must be enabled in order to use our site and service.`,
  },
  {
    title: "Analytical Cookies",
    content: `Analytical cookies help us understand how users like you use this site. This means that we can optimize our website, apps, advertising and communication and continue to remain interesting and relevant.`,
  },
  {
    title: "markeing Cookies",
    content: `This site and our trusted partners also use third-party cookies. These cookies are used to display personalized advertising both on this website and on other websites. This advertising is based on your browsing behavior such as the accommodations and prices you have seen. These cookies are also used to enable social media features on our site, such as liking and sharing pages and products on social media platforms.`,
  },
];
