import "./main.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmployeeListItem from "./components/EmployeeListItem";

function App() {
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
