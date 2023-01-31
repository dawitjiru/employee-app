import "../main.css";
import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
const EmployeePage = (props) => {
  return props.employees.map(({ image, name, occupation }, index) => {
    return (
      <div>
        <Header />
        <EmployeeDetail
          key={index}
          image={image}
          name={name}
          title={occupation}
        />
      </div>
    );
  });
};

export default EmployeePage;
