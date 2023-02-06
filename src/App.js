import LogRocket from "logrocket";
// import "./main.css";
import Wrapper from "./components/Wrapper";
import React from "react";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
  LogRocket.init("vglvoq/mukera");
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((res) => res.json())
      .then((data) => {
        if (data) setEmployees(data);
      });
  }, []);
  const [employeeDetail, setEmployeeDetail] = useState(employees[0]);
  return (
    <div>
      <Wrapper>
        <HomePage setEmployeeDetail={setEmployeeDetail} employees={employees} />
        <EmployeePage employeeDetail={employeeDetail} employees={employees} />
      </Wrapper>
    </div>
  );
}

export default App;
