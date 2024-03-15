import Chai from "./Chai";
import Hello from "./Hello";
function App() {

  const variable = "hello";
// curly bracese to acess variables
  return (
    <>
      <Chai />
      <Hello />
      
      <h1>{variable}</h1>
      {variable} 
      
    </>
  );
}

export default App;
