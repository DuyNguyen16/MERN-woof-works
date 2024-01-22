import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#7ab730] py-6 text-white px-4 flex flex-row justify-evenly items-center mt-4 start:max-md:pb-20">
      <div className="flex flex-col gap-2">
        <p className="text-[1.5rem] font-bold">Made By: Duy Nguyen</p>
        <p className="text-[1.2rem]">
          This Website is available thanks to{" "}
          <a
            className="font-bold cursor-pointer underline hover:text-[#555] ease-in-out duration-200"
            href="https://www.thedogapi.com/"
            target="_blank"
          >
            The Dog API
          </a>
        </p>
        <p className="text-lg hover:text-[#555] ease-in-out duration-200 font-bold cursor-pointer">Contact Us</p>
        <p></p>
      </div>
      <div className="flex flex-row gap-4">
        <a
          className="text-[2.3rem] cursor-pointer hover:text-[#555] ease-in-out duration-200" 
          href="https://www.linkedin.com/in/khanh-duy-nguyen/"
          target="_blank"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          className="text-[2.3rem] cursor-pointer hover:text-[#555] ease-in-out duration-200"
          href="https://github.com/DuyNguyen16"
          target="_blank"
        >
          <i className="uil uil-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
