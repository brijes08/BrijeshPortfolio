import React from "react";

const LogoutPopup = ({ popupFunc, popUpMsg, popupFunction }) => {

  return (
    <div className="logoutMainSec">
      <div className="logoutBG"></div>
      <div className="logoutBox">
        <p>{popUpMsg}</p>
        {popUpMsg==="Congratulations Login Successfull 😍"?
        <button
          className="delTskBtn saveBtn"
          onClick={popupFunc}
        >
          OK
        </button>
        : 
        <button
          className="delTskBtn saveBtn"
          onClick={popupFunction}
        >
          OK
        </button>
         }
        
      </div>
    </div>
  );
};

export default LogoutPopup;