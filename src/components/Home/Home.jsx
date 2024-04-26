import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FormSubmit from "./FormSubmit";
import FormSubmitDark from "./FormSubmitDark";
import video from "../assetsHome/videoBack.mp4";
import Card from "./Card";
import { AddressMap } from "./AddressMap";
function Home() {
  return (
    <div className="   text-white">
      <div className="hero sm:h-[400px]">
        <video className="videoHero " src={video} autoPlay muted loop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className=" w-fit mx-auto p-5 bg-back rounded-md sm:mt-5">
        <header className="text-center   text-white">
          <h4 className="text-4xl font-bold  ">Brian Chan</h4>
          <h1 className=" sm:text-xl font-medium">
            Reno/Tahoe's Family and Cosmetic Dentist
          </h1>
          <h4 className="sm:text-xl">
            6880 S McCarran, Ste. 9 Reno, NV 89509 775-825-8366
          </h4>
        </header>
      </div>

      <div className=" w-fit mx-auto mt-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Let Smile
        </button>
      </div>
      <div className="  mt-16 sm:mt-20">
        <h3 className="text-3xl  font-bold text-center border rounded-lg shadow bg-gray-800 border-gray-700 w-fit mx-auto py-2 px-3">
          Our Differents Jobs
        </h3>
        <div className="flex flex-wrap gap-10  justify-center mt-10">
          <Card />
        </div>
      </div>
      <div className="mt-10  p-10 text-white">
        <h1 className="text-3xl  font-bold text-center border rounded-lg shadow bg-gray-800 border-gray-700 w-fit mx-auto py-2 px-3">
          Learn About Us
        </h1>
        <div className=" leading-7 mt-10 md:flex md:w-fit md:mx-auto ">
          <div className="my-auto text-left ">
            <div className=" sd:w-[400px] mx-auto border rounded-lg shadow bg-gray-800 border-gray-700 ">
              <p className="text-white font-medium p-5 leading-7">
                We at Cypress Dental are excited to have you visit us and begin
                building some lasting, trusting and personal relationships e
                believe that a dentist and patient come together as a team to
                achieve a beautiful and healthy smile. We spend a lot of time
                listening to understand your concerns and goals to then be able
                to provide you the highest quality of care while working within
                your schedule and budget.{" "}
                <p>
                  We offer a full range of general and cosmetic dental care,
                  tailored to your specific needs. Informed patients make better
                  decisions about their health and well being. That is why we
                  have dedicated specific sections on the website to cover the
                  full range of topics associated with dentistry and our
                  services. Discover the comfort and possibilities that await
                  you with Dr. Brian Chan and the team at Cypress Dental. Hope
                  to see you soon,
                </p>
              </p>
            </div>
            <p className="text-black font-bold  mt-10 text-xl w-fit mx-auto sd:mx">
              -Dr. Brian Chan
            </p>
          </div>
          <span className="max-md:hidden">
            <FormSubmit />
          </span>
        </div>
      </div>
      <div className="md:hidden">
        <FormSubmitDark />
      </div>
      <div className="w-full  bg-gray-800 flex flex-col justify-center mt-10">
        <h1 className="text-black text-2xl md:text-3xl font-bold text-center mt-10 border rounded-lg shadow bg-white border-gray-700 w-fit mx-auto py-2 px-3">
          Where You Can Find Me
        </h1>
        <div className=" p-2 rounded-md mx-auto md:flex mt-10 mb-10">
          <AddressMap />
          <p className="text-White mt-10 md:mt-0  text-center md:my-auto text-xl md:text-2xl md:ml-10 font-semibold">
            Dr. Brian Chan, Cypress Dental, <br></br> 6880 S McCarran, Ste. 9
            <br />
            Reno,United States
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
