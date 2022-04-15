import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import rohit8020 from '../images/rohit8020.png'

const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const links = [
    { text: "Home", to: "/" },
    { text: "Projects", to: "/projects" },
  ];

  const activeClass = "text-white bg-gray-900";
  const inactiveClass = "text-gray-300 hover:text-white hover:bg-gray-700";

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="p-10">
              <img
                className="h-40 w-full"
                src={rohit8020}
                alt="</rohit8020>"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                    } ${i > 0 && "ml-4"}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.to ? activeClass : inactiveClass
              } ${i > 0 && "mt-1"}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
