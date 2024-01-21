import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed shadow-md top-0 px-12 md:px-20 py-5 h-22 bg-white">
      <nav className="flex justify-between items-center">
        <a className="font-bold cursor-pointer md:text-xl text-md tracking-wide" href="index.html">
          Woof.Works
        </a>
        <div className="md:flex gap-x-8 items-center hidden">
          <ul className="cursor-pointer">
            <li>
              <a className="text-md font-[600] text-main ease-in-out duration-200">
                Home
              </a>
            </li>
          </ul>
          <ul className="cursor-pointer">
            <li>
              <a className="text-md font-[600] text-black hover:text-main ease-in-out duration-200">
                Breeds
              </a>
            </li>
          </ul>
          <ul className="cursor-pointer">
            <li>
              <a className="text-md font-[600] text-black hover:text-main ease-in-out duration-200">
                Search
              </a>
            </li>
          </ul>
          <div className="bg-[#7ab730] px-5 py-2 cursor-pointer text-white font-[600] rounded-md hover:bg-[#619b26] text-md ease-in-out duration-200">
            Contact
          </div>
        </div>
        <i className="uil uil-align-justify md:hidden text-2xl cursor-pointer"></i>
      </nav>
    </header>
  );
};

export default Header;
