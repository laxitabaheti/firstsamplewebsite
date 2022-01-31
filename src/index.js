// import { StrictMode } from "react";
import AuthContextProvider from "/src/components/Store/AuthContext.js"
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render( 
    <AuthContextProvider>
      <App />
    </AuthContextProvider>,
  rootElement
);
