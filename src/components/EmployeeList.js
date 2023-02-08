import React, { Component } from "react";
import EmployeeListItem from "./EmployeeListItem";
const EmployeeList = (props) => {
  return props.employees.map(({ image, name, occupation, _id }, index) => {
    console.log(_id);
    return (
      <EmployeeListItem
        index={index}
        image={image}
        name={name}
        title={occupation}
        setEmployeeDetail={props.setEmployeeDetail}
        employees={props.employees}
      />
    );
  });
};
export default EmployeeList;
