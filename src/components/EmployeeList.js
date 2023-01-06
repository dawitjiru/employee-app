function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map(({ image, name, title }, index) => {
        return (
          <div key={index} style={StyleFriendsListItem}>
            <img style={StyleImage} src={image} alt={image} />
            <div style={StyleContent}>
              <h4 style={{ margin: "0" }}>{name}</h4>
              <p style={{ margin: "0" }}>{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const StyleImage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#f4f4f4",
};

const StyleFriendsListItem = {
  display: "flex",
  gap: "10px",
  margin: "5px",
};

const StyleContent = {};

export default EmployeeList;
