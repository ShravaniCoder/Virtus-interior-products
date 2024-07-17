import { FaRegFilePdf } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import Nav from "./Nav";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { links } from "../Data/Info";
import { IoIosMenu } from "react-icons/io";
import logo from "../../src/assets/Img/nav/logo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSublink = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="fixed w-full z-50 font-lato">
        <div className=" bg-transparent border-2 font-lato">
          <div className="flex justify-end gap-1 px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-[4rem]">
            <button className="text-black/90 font-semibold py-1 px-3 flex items-center text-sm sm:text-base gap-x-1 hover:bg-[#E5901F] hover:text-black/60 group">
              <FaRegFilePdf className="text-[#E5901F] font-semibold group-hover:text-black/60" />
              Brochure Download
            </button>
            <button className="text-black/90 font-semibold py-1 px-3 flex items-center text-sm sm:text-base gap-x-1 hover:bg-[#E5901F] hover:text-black/60 group">
              <IoMailOpenOutline className="text-[#E5901F] font-semibold text-xl group-hover:text-black/60" />
              Enquiry
            </button>
            <button className="text-black/90 font-semibold py-1 px-3 flex items-center text-sm sm:text-base gap-x-1 hover:bg-[#E5901F] hover:text-black/60 group">
              <FaBriefcase className="text-[#E5901F] group-hover:text-black/60" />
              Careers
            </button>
          </div>
        </div>
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-[4rem] py-5">
          <div className=" px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-4 bg-white shadow-2xl z-50">
            <div className=" py-5 flex items-center justify-between">
              <div className="flex-shrink-0">
                <img src={logo} alt="logo" className="mx-auto h-16" />
              </div>
              <div className="hidden lg:block z-10">
                <Nav />
              </div>
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
      <div className=" font-playfairDisplay">
        {open && (
          <div
            className={`lg:hidden  bg-white w-[60%] z-50 fixed top-0 overflow-y-auto bottom-0 py-10 pl-4 ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="z-10 pb-[2rem] flex justify-end pr-6">
              <div>
                <RxCross2
                  className="text-2xl font-bold"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

