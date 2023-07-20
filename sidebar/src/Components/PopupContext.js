import { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export function usePopupContext() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  return (
    <PopupContext.Provider value={{ showPopup, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
