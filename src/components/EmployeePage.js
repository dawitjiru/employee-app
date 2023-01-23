import "../main.css";
function EmployeePage(props) {
  return (
    <div className="right">
      <h3> EmployeePage</h3>
      <h2> {props.name}</h2>
    </div>
  );
}

export default EmployeePage;
