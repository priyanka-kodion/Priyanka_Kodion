// SidebarContent.js
import React from "react";
import { useSidebarContext } from "./SidebarContext";

const SidebarContent = () => {
  const { isOpen, toggle, menuItem } = useSidebarContext();

  // Your sidebar content JSX here, using the values from the context
  return (
    <div>
      {/* Example: Render the menu items */}
      {menuItem.map((item, index) => (
        <div key={index}>
          {item.icon} {item.name}
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
