import React, { Component } from "react";
import "../main.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
function HomePage(props) {
  return (
    <div className="left">
      <Header />
      <SearchBar />
      <EmployeeList setEmployeeDetail={props.setEmployeeDetail} employees={props.employees} />
    </div>
  );
}
export default HomePage;
