import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const IncrementValue = () => {
    setCount((prev) => prev + 1);
    // setCount(count + 1);
  };
  const DecrementValue = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
    // setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1 className="text-3xl font-bold">State Change In React</h1>
      <h2 className="text-2xl font-bold my-4">Counter Value: {count}</h2>
      <div className="flex justify-center gap-2 text-xl font-semibold items-center my-4">
        <button
          type="button"
          className=" outline -outline-offset-2 px-4 py-2 rounded-md"
          onClick={DecrementValue}
        >
          ➖
        </button>
        <button
          type="button"
          className=" bg-black text-white px-4 py-2 rounded-md"
          onClick={Reset}
        >
          Reset
        </button>
        <button
          type="button"
          className=" outline -outline-offset-2 px-4 py-2 rounded-md"
          onClick={IncrementValue}
        >
          ➕
        </button>
      </div>
    </>
  );
}

export default App;
