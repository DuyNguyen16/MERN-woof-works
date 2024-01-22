import React, { useContext, useState } from "react";
import { mainContext } from "../App";

const Header = () => {
  const [toggle, isToggle] = useState(false);

  const handleOnClick = () => {
    isToggle(!toggle);
  };
  const context = useContext(mainContext);
  return (
    <header className=" w-full fixed shadow-shadowCus top-[initial] md:top-0 px-12 md:px-20 py-5 h-22 bg-white start:max-md:bottom-0 start:max-md:left-[0] start:max-md:z-[100]">
      <nav className="flex justify-between items-center">
        <a
          className="font-bold cursor-pointer md:text-xl text-md tracking-wide text-lg"
          href="/"
        >
          Woof.Works
        </a>
        <div
          className={
            toggle
              ? "start:max-md:fixed start:max-md:w-full start:max-md:left-0 start:max-md:bg-[#fafafa] start:max-md:pt-[2rem] start:max-md:px-[1.5rem] start:max-md:pb-[4rem] start:max-md:rounded-navRadius start:max-sm:bottom-0 ease-out duration-300 start:max-md:bottom-0 start:max-md:shadow-menu md:flex md:items-center md:flex-row md:gap-8"
              : `md:flex items-center hidden gap-x-8`
          }
        >
          <ul className="cursor-pointer flex gap-x-8 start:max-md:flex-col start:max-md:gap-4 start:max-md:pb-5 start:max-md:px-2">
            <li>
              <a
                className={
                  context.tab === "home"
                    ? `md:text-base font-[600] text-main ease-in-out duration-200 text-3xl`
                    : `md:text-base font-[600] text-black hover:text-main ease-in-out duration-200 text-3xl`
                }
                href="#home"
                onClick={() => context.currentTab("home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                className={
                  context.tab === "search"
                    ? `md:text-base font-[600] text-main ease-in-out duration-200 text-3xl`
                    : `md:text-base font-[600] text-black hover:text-main ease-in-out duration-200 text-3xl`
                }
                href="#search"
                onClick={() => context.currentTab("search")}
              >
                Search
              </a>
            </li>

            <li>
              <a
                className={
                  context.tab === "breeds"
                    ? `md:text-base font-[600] text-main ease-in-out duration-200 text-3xl`
                    : `md:text-base font-[600] text-black hover:text-main ease-in-out duration-200 text-3xl`
                }
                href="#breeds"
                onClick={() => context.currentTab("breeds")}
              >
                Breed Group
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="bg-[#7ab730] px-5 py-2 cursor-pointer text-white font-[600] rounded-md hover:bg-[#619b26] text-md ease-in-out duration-200 start:max-md:text-[1.5rem]"
          >
            Contact
          </a>
          <i
            className="uil uil-times start:max-md:absolute start:max-md:right-[1.3rem] start:max-md:top-[0.5rem] text-[1.5rem] cursor-pointer start:max-md:block hidden"
            onClick={handleOnClick}
          ></i>
        </div>
        <i
          className="uil uil-align-justify md:hidden text-2xl cursor-pointer"
          onClick={handleOnClick}
        ></i>
      </nav>
    </header>
  );
};

export default Header;
