import "./main.css";
import HomePage from "./components/HomePage";
import imageOne from "./assets/images/image_one.png";
import imageTwo from "./assets/images/image_two.png";
import imageThree from "./assets/images/image_three.png";
import EmployeePage from "./components/EmployeePage";
import { useEffect, useState } from "react";

function App() {
  const employees = [
    {
      id: 1,
      image: imageOne,
      name: "John Doe",
      title: "Front end dev",
      callMobile: "123578900",
    },
    {
      id: 2,
      image: imageTwo,
      name: "Eric Johnatan",
      title: "CTO",
      callMobile: "918309834098",
    },
    {
      id: 3,
      image: imageThree,
      name: "Metin Khaled",
      title: "Team Lead",
      callMobile: "838092382",
    },
    {
      id: 4,
      image: imageTwo,
      name: "Rosa Ian",
      title: "QA Lead",
      callMobile: "098392380",
    },
  ];
  return (
    <div className="content">
      <HomePage employees={employees} />
      <EmployeePage />
    </div>
  );
}

const [employees, setEmployees] = useState([]);
useEffect(()=> {
  fetch``
})

export default App;
