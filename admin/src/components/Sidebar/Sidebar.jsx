import { IoAddCircleOutline } from "react-icons/io5";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { BsListCheck } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options flex flex-col gap-4">
        <NavLink
          to="/add"
          className="sidebar-option flex items-center gap-2 text-xl border border-black p-4"
        >
          <IoAddCircleOutline className="" />
          <p className="hidden md:block">Add Projects</p>
        </NavLink>
        <NavLink
          to="/list"
          className="sidebar-option flex items-center gap-2 text-xl border border-black p-4"
        >
          <BsListCheck className="" />
          <p className="hidden md:block">Project List</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
