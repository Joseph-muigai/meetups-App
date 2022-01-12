import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};

export default Layout;
