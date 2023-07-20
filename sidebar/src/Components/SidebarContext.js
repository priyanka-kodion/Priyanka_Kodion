import React, { createContext, useState, useContext } from "react";

import { children } from "react";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const value = {
    isOpen,
    toggle,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
