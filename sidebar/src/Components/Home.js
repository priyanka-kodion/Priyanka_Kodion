import React from "react";
import { usePopupContext } from "./PopupContext";
function Home() {
  const { showPopup, togglePopup } = usePopupContext();

  return (
    <div>
      <button className="button" onClick={togglePopup}>
        Show Popup
      </button>
      {showPopup && (
        <div className="popup">
          <p>This is the popup message!</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Home;
