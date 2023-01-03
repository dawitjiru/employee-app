import "./main.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmployeeListItem from "./components/EmployeeListItem";
import imageOne from "./assets/images/image_one.png";
import imageTwo from "./assets/images/image_two.png";
import imageThree from "./assets/images/image_three.png";

function App() {
  const emplyees = [
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
      <div className="left">
        <Header />
        <SearchBar />
        <EmployeeList />
        <EmployeeListItem />
      </div>
      <div className="right">
        <EmployeePage />
        <Header />
      </div>
    </div>
  );
}

export default App;
