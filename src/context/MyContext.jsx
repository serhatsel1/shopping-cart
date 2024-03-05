import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState("Serhat");

  const value = {
    name: "Serhat",
    surName: "SEL",
    myState,
    setMyState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node,
};
