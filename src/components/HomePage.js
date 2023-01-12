import "./../main.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage(props) {
  console.log(props);
  return (
    <div className="right">
      <Header />
      <SearchBar />
      <EmployeeList employees={props.employees} />
    </div>
  );
}
export default HomePage;
