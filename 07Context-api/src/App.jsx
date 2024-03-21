import { Children } from "react";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context Api with Chai</h1>
      <h2>to understand Children in usercontextprovider i used this</h2>
      <p>
        {" "}
         so childern is nothing but all these component like h1 h2 login and
        profile etc
      </p>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
