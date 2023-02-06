import React, { useState, Component } from "react";
import "../main.css";
import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
const EmployeePage = (props) => {
  return (
    <div className="right">
      <Header />
      <EmployeeDetail />
    </div>
  );
};

export default EmployeePage;
