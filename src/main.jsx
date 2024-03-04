import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
export  const MyContext = createContext();

const MyProvider = ({ children }) => {
  return <MyContext.Provider value={{
    name : "hahan"
  }}>{children}</MyContext.Provider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
