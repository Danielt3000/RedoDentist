import React from "react";

function FormSubmitDark({ dark }) {
  console.log(dark);

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className=" text-3xl text-black font-bold ">
          Lets Talk to Reserve a smile{" "}
        </h1>
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
              className="   pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm "
              type="text"
            />
          </div>
          <div>
            <p>Messaje</p>
            <textarea
              className=" pl-3 w-full  bg-[#ffffff]  border-b-2 border-b-pt_second   outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSubmitDark;
