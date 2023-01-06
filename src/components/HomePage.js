import "./../main.css";
import EmployeePage from "./EmployeePage";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeListItem from "./EmployeeListItem";

function HomePage(props) {
  console.log(props);
  return (
    <div className="content">
      <div className="left">
        <Header />
        <SearchBar />
        <EmployeeList employees={props.employees} />
      </div>
    </div>
  );
}
export default HomePage;
