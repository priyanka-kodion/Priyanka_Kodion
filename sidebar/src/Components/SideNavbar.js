import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "./SidebarContext";
import { FaTh, FaUserAlt, FaRegChartBar } from "react-icons/fa";
const SideNavbar = () => {
  const { isOpen, toggle } = useSidebarContext();

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/signup",
      name: "Signup",
      icon: <FaRegChartBar />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "156px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0" }}
            className="bars"
            onClick={toggle}
          >
            <FaBars />
          </div>
        </div>
        <ul className="menu_items">
          {menuItem.map((item, index) => (
            <li key={index} className="menu_item">
              <NavLink
                to={item.path}
                className={`link ${isOpen ? "show-text" : "hide-text"}`}
                activeClassName="active"
                onClick={toggle}
              >
                <div className="icon">{item.icon}</div>
                <div className={`link_text ${isOpen ? "visible" : "hidden"}`}>
                  {item.name}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
