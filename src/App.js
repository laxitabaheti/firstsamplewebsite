import { Fragment,useContext } from "react";
import "./styles.css";
import AuthContext from "./components/Store/AuthContext";
import MainHeader from "./components/MainHeader/MainHeader";
import LogIn from "./components/Login/Login";
import Home from "./components/Home/Home";

export default function App() {

const ctx=useContext(AuthContext)
  return (
    <Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedin && <LogIn/>}
        {ctx.isLoggedin && <Home/>}
      </main>
    </Fragment>
  );
}
