import React from "react";

const LogoutPopup = ({ popupFunc, popUpMsg, popupFunction }) => {

  return (
    <div className="logoutMainSec">
      <div className="logoutBG"></div>
      <div className="logoutBox">
        <p>{popUpMsg}</p>
        {popUpMsg==="Login Successfull"?
        <button
          className="delTskBtn saveBtn"
          onClick={popupFunc}
        >
          ok
        </button>
        : 
        <button
          className="delTskBtn saveBtn"
          onClick={popupFunction}
        >
          ok
        </button>
         }
        
      </div>
    </div>
  );
};

export default LogoutPopup;