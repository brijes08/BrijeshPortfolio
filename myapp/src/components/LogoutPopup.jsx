import React from "react";

const LogoutPopup = ({ popupFunc }) => {

  return (
    <div className="logoutMainSec">
      <div className="logoutBG"></div>
      <div className="logoutBox">
        <p>Are you sure want to Logout?</p>
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