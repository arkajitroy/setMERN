import React, { useCallback, useEffect, useState } from "react";
import { DefaultProfilePicture } from "../../../assets";

import "./layout.css";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(null);

  const getLoginStatusFromLS = useCallback(() => {
    const login_status = localStorage.getItem("loginStatus");
    if (login_status) setLoginStatus(JSON.parse(login_status));
  }, []);

  useEffect(() => {
    getLoginStatusFromLS();
  }, [getLoginStatusFromLS]);

  return (
    <div className="main-container">
      <div className="greeting-container">
        <img src={DefaultProfilePicture} alt="" />
        <span className="main-greeeting">Cheers Mate 🎉</span>
        <span>Now you are ready to start your own project</span>
      </div>
    </div>
  );
};

export default Home;
