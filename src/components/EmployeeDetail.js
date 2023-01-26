const EmployeeDetail = ({ image, name, occupation }) => {
  return (
    <div >
      <img  src={image} alt={image} />
      <div>
        <h3 >{name}</h3>
        <p >{occupation}</p>
      </div>
    </div>
  );
};



export default EmployeeDetail;
