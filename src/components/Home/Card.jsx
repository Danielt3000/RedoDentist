import React from "react";
import img1 from "../assetsHome/implants.png";
import cardData from "./data";
function Card() {
  return (
    <>
      {cardData.map((element) => {
        return (
          <div
            className="max-w-[320px] border rounded-lg shadow bg-gray-800 border-gray-700"
            key={element.imagen}
          >
            <a href="#">
              <img
                className="rounded-t-lg  w-full h-[260px]"
                src={element.imagen}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                  {element.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">
                {element.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
