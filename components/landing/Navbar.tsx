"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo1 from "@/public/assets/logo1.jpg";
import { Button } from "../ui/button";
// import {navItems} from "@/constants/index"

const navItems = [
  {
    href: "/#innovation",
    text: "Innovation",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold font-clash-display transition duration-300 ease-in-out",
    ariaCurrent: "page",
  },
  {
    href: "/#services",
    text: "Services",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold font-clash-display",
  },
  {
    href: "/#products",
    text: "Products",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold font-clash-display",
  },
  {
    href: "/how-it-works",
    text: "How It works",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold font-clash-display",
  },
  {
    href: "/about",
    text: "Contact Us",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold font-clash-display",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 sm:px-8 px-0  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
            
            <span className="font-extrabold text-3xl font-clash-display">
              <Image src={Logo1} alt=" Logo" height={50} width={150} />
            </span>
          </Link>

          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={item.className}
                  aria-current={
                    item.ariaCurrent === undefined ? undefined : "page"
                  }
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          {/* <ThemeSwitcher /> */}
          <Button
            type="button"
            className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md"
          >
            <svg height="27" viewBox="0 0 27 27" width="27" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="nonzero">
                <path fill="white" d="M18.004 13.977a.696.696 0 00.848-.494 4.356 4.356 0 00-5.337-5.336.697.697 0 00.36 1.345 2.957 2.957 0 012.865.768 2.973 2.973 0 01.767 2.864c-.099.37.122.753.497.853z"></path>
                <path fill="white" d="M20.564 6.435a8.298 8.298 0 00-8.029-2.154.723.723 0 00-.51.884c.1.376.502.61.883.51a6.91 6.91 0 013.558 0 6.843 6.843 0 013.078 1.78 6.857 6.857 0 011.78 6.638.724.724 0 00.698.907c.326 0 .613-.22.697-.536a8.367 8.367 0 000-4.303 8.316 8.316 0 00-2.155-3.726z"></path>
                <path fill="white" d="M26.583 9.1a12.276 12.276 0 00-3.18-5.504 12.285 12.285 0 00-5.504-3.18 12.372 12.372 0 00-6.356-.001.727.727 0 00-.445.34.725.725 0 00-.073.556c.101.38.51.62.895.517a10.916 10.916 0 015.601 0c1.825.488 3.501 1.457 4.847 2.803a10.803 10.803 0 012.801 10.448.727.727 0 00.707.921c.331 0 .622-.223.707-.543.556-2.079.556-4.277 0-6.357zM20.68 18.613c-.882-.726-1.668-1.064-2.473-1.064-.74 0-1.506.3-2.343.916l-.049.035v.003c-.324.251-1.027.9-1.033.905-.078.071-.288.151-.467.151a.355.355 0 01-.063-.005c-.013-.003-1.3-.41-3.872-2.945-2.52-2.56-2.93-3.842-2.93-3.843-.035-.143.043-.44.152-.558.274-.3.76-.837.94-1.08v-.002c1.256-1.712 1.21-3.15-.154-4.805-.91-1.105-2.043-2.244-3.547-2.317-1.15-.06-2.292.506-3.513 1.727C.172 6.89-.28 8.724.173 10.386c.092.523 1.038 5.254 6.114 10.33 5.074 5.074 9.806 6.02 10.306 6.107.432.118.88.177 1.331.177h.001c1.282 0 2.501-.483 3.345-1.327 1.217-1.217 1.782-2.367 1.726-3.512-.072-1.505-1.212-2.638-2.317-3.548zm-.434 6.037c-.575.574-1.419.903-2.314.903-.33 0-.66-.044-.975-.132a.826.826 0 00-.08-.018c-.046-.007-4.687-.833-9.566-5.712-4.861-4.859-5.706-9.521-5.714-9.566a.652.652 0 00-.016-.078c-.332-1.198-.03-2.49.77-3.29.88-.88 1.645-1.309 2.338-1.309l.081.002c.941.046 1.792.932 2.5 1.793.939 1.138.968 1.846.118 3.01l-.031.043c-.135.176-.575.667-.83.943-.428.466-.632 1.251-.484 1.866.036.15.428 1.55 3.094 4.304.016.02.032.042.052.06l.343.344c.02.02.042.038.051.043 2.764 2.674 4.163 3.067 4.312 3.102.131.032.272.048.422.048.535 0 1.09-.205 1.446-.532.286-.263.798-.723.96-.841.591-.436 1.048-.63 1.483-.63.463 0 .941.225 1.553.729.86.707 1.747 1.558 1.792 2.5.034.713-.392 1.505-1.305 2.418z"></path>
              </g>
            </svg>
            <span className="ml-2">+17252430553</span>
          </Button>
          <Button
            type="button"
            className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md"
          >
            <svg height="21" viewBox="0 0 27 21" width="27" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="nonzero">
                <path fill="white" d="M24.009 0H2.99C1.341 0 0 1.322 0 2.946v15.108C0 19.679 1.342 21 2.991 21h21.018C25.659 21 27 19.679 27 18.054V2.946C27 1.321 25.658 0 24.009 0zM2.99 1.416h21.018c.16 0 .32.025.474.075l-9.91 9.99a1.502 1.502 0 01-1.073.448c-.406 0-.787-.16-1.073-.447L2.517 1.49c.153-.05.313-.075.474-.075zM1.438 18.054V2.946c0-.151.023-.302.069-.447l8.005 8.07-7.969 8.035a1.495 1.495 0 01-.105-.55zm22.57 1.53H2.992a1.58 1.58 0 01-.366-.044l7.892-7.957.88.888a2.94 2.94 0 002.103.874 2.94 2.94 0 002.103-.874l.88-.888 7.892 7.957a1.545 1.545 0 01-.366.044zm1.554-1.53c0 .189-.036.375-.106.55l-7.968-8.034 8.006-8.071c.045.145.068.295.068.447v15.108z"></path>
              </g>
            </svg>
            <span className="ml-2">jsong@aibuildiq.me</span>
          </Button>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={item.className}
                aria-current={
                  item.ariaCurrent === undefined ? undefined : "page"
                }
              >
                {item.text}
              </Link>
            </li>
          ))}
          {/* <li className="flex flex-col space-y-2 mt-2">
            <ThemeSwitcher /> 
            <Button
              type="button"
              className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md font-clash-display"
            >
              Download
            </Button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
