import Chai from "./Chai";
import Hello from "./Hello";
function App() {
  const variable = "hello";

  return (
    <>
      <Chai />
      <Hello />
      {variable}
    </>
  );
}

export default App;
