"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/Logo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col">
      {/* First row */}
      <div className="flex justify-between items-center py-2 px-2 sm:px-8 md:px-112 lg:px-16">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={80} style={{ height: '45px', objectFit: 'cover', objectPosition: 'center' }} />
        </Link>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-blue-500 hover:underline">Log in</Link>
          <Link href="/location" className="hover:text-blue-500 hover:underline">Location</Link>      
          <div className="relative">
            {isSearchActive ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Looking for..."
                  className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black animate-slide-left"
                  autoFocus
                  onBlur={() => setIsSearchActive(false)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 transition-all duration-300"
                  onClick={() => {/* Add search functionality */}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                onClick={() => setIsSearchActive(true)}
              >
                <span className="mr-2">Looking for</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>
          <button
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="mr-2">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            // <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 py-2 rounded-md">
            //   {/* Add your menu items here */}
            //   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 1</a>
            //   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 2</a>
            //   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 3</a>
            // </div>
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
