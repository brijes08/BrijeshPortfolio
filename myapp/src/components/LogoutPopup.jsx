import React from "react";

const LogoutPopup = ({ logOutPop }) => {

  return (
    <div className="logoutMainSec">
      <div className="logoutBG"></div>
      <div className="logoutBox">
        <p>Are you sure want to Logout?</p>
        <button
          className="delTskBtn saveBtn"
          onClick={logOutPop}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default LogoutPopup;