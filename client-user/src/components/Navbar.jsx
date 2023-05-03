import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 m-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center pb-4 mx-auto border-b-[1px]">
          <Link to={"/"} className="flex items-center md:w-[27rem] w-64 ">
            <img
              src="https://see.fontimg.com/api/renderfont4/axyVg/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIFRhbmdlcmFuZyBUaW1lcw/old-english-five.png"
              alt="Old English fonts"
            />
          </Link>
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className=" float-right inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="max-w-screen-xl hidden md:flex flex-wrap items-center justify-between md:justify-center mx-auto border-double border-b-4 border-black">
          <ul className="flex flex-col text-xs font-normal p-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/home"}
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/home?q=World"}
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                World
              </Link>
            </li>
            <li>
              <Link
                to={"/home?q=Indonesia"}
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Indonesia
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link
            to={"/"}
            className="flex items-center mx-2 mb-5 md:w-[27rem] w-64 border-b-[1px] pb-4 border-black"
          >
            <img
              src="https://see.fontimg.com/api/renderfont4/axyVg/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIFRhbmdlcmFuZyBUaW1lcw/old-english-five.png"
              alt="Old English fonts"
            />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/home"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/home?q=World"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">World</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/home?q=Indonesia"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Indonesia</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
