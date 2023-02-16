import React from "react";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <div className="phone:w-full phone:px-5 tablet:p-0 tablet:w-5/6 max-w-[720px] h-5/6 max-h-[600px]">
      <h1 className="text-center phone:text-3xl tablet:text-4xl laptop:text-6xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-1">
        Contact
      </h1>
      <div className="w-full h-[450px] bg-black/[0.6] flex flex-col justify-center items-center px-5 rounded-lg">
        <form
          action="#"
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-full flex phone:flex-col tablet:flex-row justify-between items-center tablet:gap-2 tablet:mb-5">
            <div className="phone:w-full tablet:w-1/2">
              <label
                htmlFor="firstname"
                className=" text-xl text-white font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-2 border-solid border-[#00FFC2] h-[40px] indent-4 text-white placeholder:font-semibold"
                name="firstname"
                placeholder="Enter First Name"
              />
            </div>
            <div className="phone:w-full tablet:w-1/2">
              <label
                htmlFor="lastname"
                className=" text-xl text-white font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-2 border-solid border-[#00FFC2] h-[40px] indent-4  text-white placeholder:font-semibold"
                name="lastname"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="subject"
              className="text-xl text-white font-semibold self-start"
            >
              Subject
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-2 border-solid border-[#00FFC2] h-[40px] tablet:mb-5 indent-4 text-white placeholder:font-semibold"
              name="subject"
              placeholder="Enter Subject"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="text-xl text-white font-semibold self-start"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full bg-transparent border-2 border-solid border-[#00FFC2] h-32 indent-4 text-white placeholder:font-semibold"
              placeholder="Enter Your Messgae Here "
            ></textarea>
          </div>
          <Button btnText={"Message me!"} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
