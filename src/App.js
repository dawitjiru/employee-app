import './main.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeeListItem from './components/EmployeeListItem';


function App() {
  return (
    <div className="App">
    <h2> Hellooooooooooo from react</h2>
    <HomePage />
    <EmployeePage />
    <Header />
    <SearchBar />
    <EmployeeList />
    <EmployeeListItem />
    </div>
  );
}

export default App;