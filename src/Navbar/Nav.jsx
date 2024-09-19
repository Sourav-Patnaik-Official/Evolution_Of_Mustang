import React, { useRef, useEffect, useState } from "react";
import "../Navbar/Nav.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import sectionsData from "../Content/Content"; // Import your data

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      sidebarRef.current.scrollTop = 0; // Ensure scrollbar starts at the top
    }
  }, [isOpen]);

  const reversedItems = [...sectionsData];

  return (
    <>
      {/* Button to toggle sidebar visibility */}
      {!isOpen && (
        <button
          className="fixed top-3 left-4 z-40 p-2 bg-yellow-400 rounded"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu className="burger-menu text-white" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-white w-6/12 md:w-3/12 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-white text-sm font-bold">
              <span className="mustang">MUSTANG</span>
              <span className="text-yellow-400 ">Evolution</span>
            </h1>
          </div>
          {isOpen && (
            <button className="rounded" onClick={() => setIsOpen(false)}>
              <RxCross1 className=" text-yellow-400 " />
            </button>
          )}
        </div>
        <ul
          ref={sidebarRef}
          className="space-y-2 flex flex-col h-[90%]  overflow-y-auto scrollbar-custom"
        >
          {/* Home link at the top */}
          <li>
            <a
              href="/"
              id="home-link"
              className="block py-3 pl-3 mt-6 text-white  hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
          </li>
          {/* List items */}
          {reversedItems.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                id={`item-${index}`}
                className="block py-3 pl-3 text-white hover:text-yellow-400 transition-colors"
              >
                {section.headingText}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideNavbar;
