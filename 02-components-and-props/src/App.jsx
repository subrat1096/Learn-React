import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Subrat Kumar Behera",
    age: 32,
    address: {
      street: "Mahaveer Lane, Near U.P.School Badambadi",
      "P.O": "Arunodaya Market",
      "P.S": "Badambadi",
      city: "Cuttack",
      state: "Odisha",
      country: "India",
    },
    description: `I'm a full-stack web developer. I am a senior programmer with
    good knowledge of fron-end adnd back-end techniques.`,
  };
  return (
    <>
      <h1 className="text-3xl font-bold bg-orange-500 p-3 rounded-lg">
        Vite With Tailwind CSS
      </h1>
      <Card
        name={myObj.name}
        btnTxt="View Profile →"
        description={myObj.description}
      />
      <Card
        name={"My Journey"}
        btnTxt="View My Journey →"
        description={`I'm a full-stack web developer. I am a senior programmer with
          good knowledge of fron-end adnd back-end techniques.`}
      />
      <Card
        name={"Projects"}
        btnTxt="View Projects →"
        description={`I'm a full-stack web developer. I am a senior programmer with
          good knowledge of fron-end adnd back-end techniques.`}
      />
      <Card />
    </>
  );
}

export default App;
