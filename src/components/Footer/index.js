import React from "react";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          “No code is better than no code”
        </span>
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            Send me an email, Why not ?
          </a>
        </div>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillFacebook />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
