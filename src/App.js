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
        <HomePage />
        <EmployeePage />
        <Header />
        <SearchBar />
      </div>
      <div className="right">
        <EmployeeList />
        <EmployeeListItem />
      </div>
    </div>
  );
}

export default App;
