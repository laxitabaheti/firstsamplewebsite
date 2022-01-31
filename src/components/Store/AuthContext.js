import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedin: false,
  isLoggedout: () => {},
  onLogin: (em, pw) => {}
});

export const AuthContextProvider = (props) => {
  const [loginValid, setLoginValid] = useState(false);
  const LoginHandler = (em, pw) => {
    localStorage.setItem("isLoggedIn", "1");
    setLoginValid(true);
  };
  useEffect(() => {
    const storeduserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storeduserLoggedInInfo === "1") {
      setLoginValid(true);
    }
  }, []);  
  const Logouthandler = () => {
    setLoginValid(false);
    localStorage.removeItem("isLoggedIn");
  };
return <AuthContext.Provider
      value={{
        isLoggedin: loginValid,
        isLoggedout: Logouthandler,
        onLogin: LoginHandler
      }}
    >{props.children}</AuthContext.Provider>
;
};


export default AuthContext;
