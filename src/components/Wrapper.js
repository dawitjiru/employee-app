import React, { Component } from "react";
import EmployeePage from "./EmployeePage";
import HomePage from "./HomePage";

const Wrapper = (props) => {
  return <div style={styledWrapper}>{props.children}</div>;
};
const styledWrapper = {
  //border:'2px solid red',
  maxWidth: "1000px",
  margin: "0 auto",
  backgroundColor: "rgb(21, 14, 171)",
  display: "flex",
  gap: "10px",
  padding: "20px",
  borderRadius: "5px",
};
export default Wrapper;
