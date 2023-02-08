import { flexbox } from "@mui/system";
import React, { Component } from "react";
const EmployeeDetail = (props) => {
  return (
    <div>
      <div style={styledDiv}>
        <div>
          <img style={styledImage} src={props.employeeDetail.image} />
        </div>
        <div>
          <h3>{props.employeeDetail.name}</h3>
          <p>{props.employeeDetail.occupation}</p>{" "}
        </div>
      </div>
      <div style={styledEmployeeDetail}>
        <h3>Call Office</h3>
        <p>{props.employeeDetail.callOffice}</p>
        <h3>Call Mobile</h3>
        <p>{props.employeeDetail.callMobile}</p>
        <h3>SMS</h3>
        <p>{props.employeeDetail.sms}</p>
        <h3>Email</h3>
        <p>{props.employeeDetail.email}</p>
      </div>
    </div>
  );
};
const styledImage = {
  width: "100px",
  height: "100px",
  borderRadius: "30%",
  backgroundColor: "clear",
  margin: "3px",
  padding: "2px",
};
const styledDiv = {
  display: "flex",
};
const styledEmployeeDetail = {
  gap: "10px",
  margin: "8px",
  padding: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  alignItems: "center",
  borderRadius: "2%",
};
export default EmployeeDetail;
