// import "./main.css";
import Wrapper from "./components/Wrapper";
import React from "react";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((res) => res.json())
      .then((data) => {
        if (data) setEmployees(data);
      });
  }, []);
  // console.log("employees", employees);
  return (
    <div>
      <Wrapper>
        <HomePage employees={employees} />
        <EmployeePage employees={employees} />
      </Wrapper>
    </div>
  );
}

export default App;
