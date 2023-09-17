import React, { useState,useEffect } from "react";

const Context = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email,password) => {},
});



export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin:  loginHandler ,
        onLogout:  logoutHandler ,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
