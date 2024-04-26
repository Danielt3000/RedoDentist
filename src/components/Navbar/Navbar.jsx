import React, { useEffect, useState } from "react";
import logo from "../assetsHome/logo.webp";
import BurgerNav from "./BurgerNav";

function Navbar() {
  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className=" h-[120px]" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-bla rounded-lg md:hidden bg-blue-400    focus:outline-black focus:ring-2 focus:ring-white"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="left-20  max-md:absolute max-md:w-9/12  max-md:bg-blue-400 max-md:text-center     font-bold text-xl xl:text-2xl  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100  max-md:hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100  max-md:hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100  max-md:hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dar md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hove md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="tel:7758258366"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100  max-md:hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  (775) 825-8366
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
// import React, { useEffect, useState } from "react";
// import logo from "../assetsHome/logo.webp";
// import BurgerNav from "./BurgerNav";

// function Navbar() {
//   return (
//     <div>
//       <nav classNameName="flex justify-between sd:w-10/12 sd:mx-auto max-sd:px-10  mt-4">
//         <div>
//           <img classNameName="w-52 ml-[-2rem] " src={logo} alt="" />
//         </div>
//         <div classNameName="max-sd:hidden flex my-auto justify-evenly  w-8/12  text-xl font-bold ">
//           <a
//             classNameName=" hover:scale-110 hover:bg-black hover:px-3 hover:py-2 hover:rounded-xl transition"
//             href=""
//           >
//             Home{" "}
//           </a>
//           <a href="">Our Services</a>
//           <a href="">Contact Us</a>
//         </div>
//         <div classNameName="sd:hidden mt-10">
//           <BurgerNav />
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
