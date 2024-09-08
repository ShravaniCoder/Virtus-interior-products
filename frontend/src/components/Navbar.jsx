import { FaRegFilePdf } from "react-icons/fa";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { links } from "../Data/Info";
import { IoIosMenu } from "react-icons/io";
import logo from "../../src/assets/Img/nav/logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Function to handle navbar show/hide on scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSublink = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleViewPdf = () => {
    navigate("/Brochure.pdf");
  };

  return (
    <>
      {/* Navbar container */}
      <div
        className={`fixed w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-[4rem] py-5">
          <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-4 bg-white rounded-sm shadow-2xl z-50">
            <div className="py-3 flex items-center justify-between">
              {/* Logo and heading */}
              <div className="flex flex-col">
                <img src={logo} alt="logo" className="mx-auto h-16" />
                <h1 className="text-xxs font-normal text-[#5A7B9E]">
                  Customized Ceiling | Expansion Joint Cover | Partition |
                  Flooring
                </h1>
              </div>

              {/* Desktop navigation */}
              <div className="hidden lg:block z-10">
                <Nav />
              </div>

              {/* PDF download button */}
              <div className="hidden lg:block z-10">
                <button onClick={handleViewPdf}>
                  <div className="text-black/90 font-medium py-1 px-3 flex items-center text-sm sm:text-lg gap-x-1 rounded-sm hover:bg-[#fcaf49] hover:text-black/60 group">
                    <FaRegFilePdf className="text-[#E5901F] font-semibold group-hover:text-black/60" />
                    Brochure Download
                  </div>
                </button>
              </div>

              {/* Mobile menu toggle */}
              <div className="text-center lg:hidden">
                <IoIosMenu
                  className="shadow-md text-4xl p-1 bg-[#243240] text-white"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="font-playfairDisplay">
        {open && (
          <div
            className={`lg:hidden bg-white w-[60%] z-50 fixed top-0 overflow-y-auto bottom-0 py-10 pl-4 ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="z-10 pb-[2rem] flex justify-end pr-6">
              <RxCross2
                className="text-2xl font-bold"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Links */}
            <div className="lg:hidden">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((link, index) => (
                  <li key={link.id} className="relative">
                    <NavLink
                      to={link.path}
                      onClick={() => toggleDropdown(index)}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#E5901F]"
                    >
                      {link.title}
                    </NavLink>

                    {link.sublink && activeIndex === index && (
                      <ul className="pl-4 space-y-1">
                        {link.sublink.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={sublink.link}
                              onClick={() => toggleSublink(index)}
                              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#E5901F]"
                            >
                              {sublink.name}
                            </NavLink>
                            {sublink.children && activeIndex === index && (
                              <ul className="pl-4 space-y-1">
                                {sublink.children.map((child, childIndex) => (
                                  <li key={childIndex}>
                                    <NavLink
                                      to={child.link}
                                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#E5901F]"
                                    >
                                      {child.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <button onClick={handleViewPdf}>
                  <div className="text-black/90 font-medium py-1 px-3 flex items-center text-sm sm:text-lg gap-x-1 hover:bg-[#fcaf49] hover:text-black/60 group">
                    <FaRegFilePdf className="text-[#E5901F] font-semibold group-hover:text-black/60" />
                    Brochure Download
                  </div>
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
