import React from "react";

function FormSubmit({ dark }) {
  console.log(dark);

  return (
    <div>
      <div className="text-center ml-5 m3:ml-14">
        <h1 className=" text-2xl  text-black">Lets Talk to Reserve a smile </h1>
        <form className="w-[300px]  mx-auto text-black text-left">
          <div>
            <p>Name</p>
            <input
              className=" pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm"
              type="text"
            />
          </div>
          <div>
            <p>E-mail</p>
            <input
              className=" pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm "
              type="text"
            />
          </div>
          <div>
            <p>Phone</p>
            <input
              className="  pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm  "
              type="text"
            />
          </div>
          <div>
            <p>Messaje</p>
            <textarea
              className=" pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-xl"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="w-fit mx-auto">
            <button
              className="px-3 py-1 bg-blue-700 rounded-sm mx-auto text-white"
              type="sumbit"
            >
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSubmit;
