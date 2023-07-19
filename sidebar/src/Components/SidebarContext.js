// SidebarContext.js
import React, { createContext, useState, useContext } from "react";
import { FaTh, FaUserAlt, FaRegChartBar } from "react-icons/fa";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

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

  const value = {
    isOpen,
    toggle,
    menuItem,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
