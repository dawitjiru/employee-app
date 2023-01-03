import "./main.css";
import HomePage from "./components/HomePage";
import imageOne from "./assets/images/image_one.png";
import imageTwo from "./assets/images/image_two.png";
import imageThree from "./assets/images/image_three.png";

function App() {
  const employees = [
    {
      id: 1,
      image: imageOne,
      name: "John Doe",
      title: "Front end dev",
      callMobile: "123578900",
    },
    {
      id: 2,
      image: imageTwo,
      name: "Eric Johnatan",
      title: "CTO",
      callMobile: "918309834098",
    },
    {
      id: 3,
      image: imageThree,
      name: "Metin Khaled",
      title: "Team Lead",
      callMobile: "838092382",
    },
    {
      id: 4,
      image: imageTwo,
      name: "Rosa Ian",
      title: "QA Lead",
      callMobile: "098392380",
    },
  ];
  return (
    <div>
      <HomePage />
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

export default App;
