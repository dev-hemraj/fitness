import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navLinks } from "../data/navLinks.js";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { IoFitnessSharp, IoClose } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  // Mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Mobile Sub menu toggle
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // Dark,Light Mode
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);
  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // handleMenu CLose

  const handleMenuClose = () => {
    setIsSubmenuOpen(false);
    setIsMenuOpen(false);
  };

  // When open Mobile Prevent to scroll body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close Open mobile nav with esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // HeighLight menu who have submenu
  const { pathname } = useLocation();

  return (
    <div className="bg-green-600 dark:bg-slate-950 sticky top-0 z-80 dark:border-b-2 dark:border-slate-800 shadow-lg">
      <nav className="max-w-7xl mx-auto py-5 px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <IoFitnessSharp className="text-white dark:text-green-400 text-5xl" />
          <h4 className="text-white dark:text-slate-100 font-bold text-3xl">
            React<span className="text-green-200 dark:text-green-400">Fit</span>
          </h4>
        </Link>
        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isSubmenuActive = link.subMenu?.some(
                (subLink) => subLink.path === pathname,
              );

              return (
                <li
                  key={link.name}
                  className="group relative text-lg font-medium"
                >
                  {link.subMenu ? (
                    <>
                      <span
                        className={`flex items-center gap-1 cursor-default transition ${
                          isSubmenuActive
                            ? "text-green-200 dark:text-green-400"
                            : "text-white dark:text-slate-100 group-hover:text-green-200 dark:group-hover:text-green-400"
                        }`}
                      >
                        {link.name}
                        <IoIosArrowDown className="text-base transition group-hover:rotate-180" />
                      </span>
                      <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                        <ul className="w-50 bg-white dark:bg-slate-950 dark:border dark:border-slate-800 rounded-lg shadow-lg dark:shadow-slate-800 p-3">
                          {link.subMenu.map((subLink) => (
                            <li key={subLink.name}>
                              <NavLink
                                to={subLink.path}
                                className={({ isActive }) =>
                                  `block py-2 transition ${
                                    isActive
                                      ? "text-green-600 dark:text-green-400"
                                      : "text-gray-800 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400"
                                  }`
                                }
                              >
                                {subLink.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `transition ${
                          isActive
                            ? "text-green-200 dark:text-green-400"
                            : "text-white dark:text-slate-100 hover:text-green-200 dark:hover:text-green-400"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Dark Mode and CTA button */}
        <div className="flex gap-5 items-center">
          <button
            className="h-9 w-9 rounded-full  flex items-center justify-center border border-green-500 dark:border-slate-700 dark:bg-slate-700 cursor-pointer"
            aria-label="Toggle dark mode"
            onClick={handleDarkMode}
          >
            {isDarkMode ? (
              <MdLightMode className="text-xl text-white dark:text-yellow-300" />
            ) : (
              <MdDarkMode className="text-xl text-green-800 dark:text-yellow-300" />
            )}
          </button>
          <Link
            to="/contact"
            className="bg-white dark:bg-green-500 cursor-pointer text-green-600 dark:text-slate-900 font-bold px-5 py-2 rounded-full hover:-translate-y-1 transition duration-600 ease-in-out hidden lg:block"
          >
            Book a Session
          </Link>
          {/* Hamburger menu */}
          <button
            className="lg:hidden text-white dark:text-slate-100 text-3xl cursor-pointer"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </nav>
      {/* Mobile Menu - off-canvas menu */}

      <div
        inert={!isMenuOpen}
        className={`fixed inset-0 lg:hidden bg-green-800 dark:bg-slate-950 z-100 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top Row: logo + close icon */}
        <div className="flex justify-between items-center px-5 py-5">
          <div className="flex items-center gap-2">
            <IoFitnessSharp className="text-white dark:text-green-400 text-4xl" />
            <h4 className="text-white dark:text-slate-100 font-bold text-2xl">
              React
              <span className="text-green-200 dark:text-green-400">Fit</span>
            </h4>
          </div>
          <button
            className="text-white dark:text-slate-100 text-3xl cursor-pointer"
            aria-label="Close menu"
            onClick={handleMenuClose}
          >
            <IoClose />
          </button>
        </div>
        {/* Link */}
        <ul className="flex flex-col gap-6 px-5 pt-5 text-white dark:text-slate-100 text-2xl font-medium">
          {navLinks.map((navLink) => {
            const isSubmenuActive = navLink.subMenu?.some(
              (subLink) => subLink.path === pathname,
            );

            return (
              <li key={navLink.name}>
                {navLink.subMenu ? (
                  <>
                    <button
                      className={`flex items-center gap-2 cursor-pointer ${
                        isSubmenuActive
                          ? "text-green-300 dark:text-green-400"
                          : ""
                      }`}
                      aria-expanded={isSubmenuOpen}
                      onClick={() =>
                        setIsSubmenuOpen((prevState) => !prevState)
                      }
                    >
                      {navLink.name}
                      <IoIosArrowDown
                        className={`text-xl transition-transform duration-300 ease-linear ${
                          isSubmenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* submenu */}
                    {isSubmenuOpen && (
                      <ul className="mt-4 ml-4 flex flex-col gap-4 text-lg text-green-100 dark:text-slate-400">
                        {navLink.subMenu.map((subLink) => (
                          <li key={subLink.name}>
                            <NavLink
                              to={subLink.path}
                              onClick={handleMenuClose}
                              className={({ isActive }) =>
                                `block ${isActive ? "text-green-300 dark:text-green-400" : ""}`
                              }
                            >
                              {subLink.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={navLink.path}
                    onClick={handleMenuClose}
                    className={({ isActive }) =>
                      isActive ? "text-green-300 dark:text-green-400" : ""
                    }
                  >
                    {navLink.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA botton */}
        <div className="px-5 pt-10 flex">
          <Link
            to="/contact"
            onClick={handleMenuClose}
            className="bg-white dark:bg-green-500 text-green-600 dark:text-slate-900  cursor-pointer font-bold px-10 py-3 rounded-full"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
