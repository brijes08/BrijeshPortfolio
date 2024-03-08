import React from "react";

const LogoutPopup = ({ popupFunc, popUpMsg }) => {

  return (
    <div className="logoutMainSec">
      <div className="logoutBG"></div>
      <div className="logoutBox">
        <p>{popUpMsg}</p>
        <button
          className="delTskBtn saveBtn"
          onClick={popupFunc}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default LogoutPopup;