// SideNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "./SidebarContext";

const SideNavbar = () => {
  const { isOpen, toggle, menuItem } = useSidebarContext();

  return (
    <div className={`container ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
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
                className="link"
                activeClassName="active"
                onClick={toggle} // Close the sidebar on click of any menu item
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
