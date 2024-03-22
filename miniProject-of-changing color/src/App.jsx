import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  
  const [color, setColor] = useState("Teal");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor(()=>"red")} // call back method to change color
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }} // style is always in double curly braces
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")} // onClick ko function chiye but setColor already ek function hota hai jo ki parameter le bhi sakta hai aur nhi bhi aur hame setColor me previous state ka acess milta hai , otherwise we dont need call back
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("maroon")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "maroon" }}
          >
            Maroon
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Teal")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("Olive")}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Olive" }}
          >
            olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
