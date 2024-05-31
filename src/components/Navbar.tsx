"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  DGital
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" passHref>
                <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </span>
              </Link>
              <Link href="/service" passHref>
                <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Service
                </span>
              </Link>
              <Link href="/project" passHref>
                <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Project
                </span>
              </Link>
              <div className="relative">
                <button
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Pages
                </button>
                {isOpen && (
                  <motion.div
                    className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link href="/team" passHref>
                        <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                          Our Team
                        </span>
                      </Link>
                      <Link href="/testimonial" passHref>
                        <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                          Testimonial
                        </span>
                      </Link>
                      <Link href="/404" passHref>
                        <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                          404 Page
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
              <Link href="/contact" passHref>
                <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/login" passHref>
              <span className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Get Started
              </span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                About
              </span>
            </Link>
            <Link href="/service" passHref>
              <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Service
              </span>
            </Link>
            <Link href="/project" passHref>
              <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Project
              </span>
            </Link>
            <div className="relative">
              <button
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                Pages
              </button>
              {isOpen && (
                <motion.div
                  className="mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="/team" passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                        Our Team
                      </span>
                    </Link>
                    <Link href="/testimonial" passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                        Testimonial
                      </span>
                    </Link>
                    <Link href="/404" passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                        404 Page
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
            <Link href="/contact" passHref>
              <span className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </span>
            </Link>
            <Link href="/login" passHref>
              <span className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block text-center mt-4">
                Get Started
              </span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
