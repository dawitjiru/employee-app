import React, { Component }  from 'react';
const EmployeeListItem = ({ index, image, name, occupation }) => {
  const handleEmployeeDetail = () => {
    console.log(name);
  };
  return (
    <div
      key={index}
      style={styledEmployeeListItem}
      onClick={handleEmployeeDetail}
    >
      <img style={styledImage} src={image} alt={image} />

      <h3 style={{ margin: "0" }}>{name}</h3>
      <p style={{ margin: "0" }}>{occupation}</p>
    </div>
  );
};

const styledImage = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "aqua",
  margin: "3px",
  padding: "2px",
};

const styledEmployeeListItem = {
  display: "flex",
  gap: "10px",
  margin: "8px",
  padding: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "2%",
};

export default EmployeeListItem;
