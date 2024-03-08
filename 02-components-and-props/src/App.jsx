import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-orange-500 p-3 rounded-lg">
        Vite With Tailwind CSS
      </h1>
      <Card
        name={"Subrat Kumar Behera"}
        btnTxt="View Profile →"
        description={`I'm a full-stack web developer. I am a senior programmer with
          good knowledge of fron-end adnd back-end techniques.`}
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
    </>
  );
}

export default App;
