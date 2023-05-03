import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 pt-20 pb-5">
      <div className="w-full max-w-screen-xl mx-auto p-5 xl:p-0 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 md:w-[20rem] w-64 cursor-pointer">
            <img
              src="https://see.fontimg.com/api/renderfont4/axyVg/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIFRhbmdlcmFuZyBUaW1lcw/old-english-five.png"
              alt="Old English fonts"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a className="mr-4 hover:underline md:mr-6 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6 cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6 cursor-pointer">
                Licensing
              </a>
            </li>
            <li>
              <a className="hover:underline cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a className="hover:underline cursor-pointer">The Tangerang Times</a>
        </span>
      </div>
    </footer>
  );
};
