import "./../main.css";
import EmployeePage from "./EmployeePage";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeListItem from "./EmployeeListItem";
function HomePage() {
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
  export default HomePage;