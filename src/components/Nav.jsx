import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../Data/Info";
import GoToTop from "./GoToTop";


const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setActiveSubIndex(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setActiveSubIndex(subIndex);
  };

  const handleSubMouseLeave = () => {
    setActiveSubIndex(null);
  };

  return (
    <nav className="bg-white text-black uppercase font-playfairDisplay">
      <ul className="flex space-x-4 text-base font-semibold ">
        {links.map((link, index) => (
          <li
            key={link.id}
            className="relative hover:text-[#E5901F] hover:half-bottom-border "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
           onClick={GoToTop}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `half-bottom-border ${isActive ? " border-b-2 border-[#E5901F]" : ""}`
              }
            >
              {link.title}
            </NavLink>

            {link.sublink && activeIndex === index && (
              <div className="w-[100%]">
                <ul className="absolute top-full left-0 w-44 bg-white animate-nav-up py-2">
                  {link.sublink.map((sublink, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative border-b px-1 hover:bg-[#4F8BAD] hover:text-white"
                      onMouseEnter={() => handleSubMouseEnter(subIndex)}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      <NavLink to={sublink.link} className="block text-sm py-2">
                        {sublink.name}
                      </NavLink>

                      {sublink.children && activeSubIndex === subIndex && (
                        <ul className="absolute top-0 left-full w-44">
                          {sublink.children.map((child) => (
                            <li key={child.id}>
                              <NavLink
                                to={child.link}
                                className="block text-sm p-2 bg-white"
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
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
