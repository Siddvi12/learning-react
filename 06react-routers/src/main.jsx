import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Github from "./components/Github";

// first method of routing

// const router =createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// second method of routing
/////// very very important concept
const router = createBrowserRouter(
  createRoutesFromElements(
    // yha path / hai means jha bhi hum ye path denge vo page layout pe le
    //yha ek main layout route k ander sabhi route path hai
    // about section me another about hua hai nexting
    <Route path="/" element={<Layout />}>
      <Route path="contact-us" element={<Contact />} />
      <Route path="" element={<Home />} />

      <Route path="about" element={<About />}>
        <Route path="path" element={<About />} />
      </Route>
      <Route path="user/:userid" element={<User />} />
      <Route
        //loader already data fetch kr leta hai only cursor le jane pe and loader usi k kaam aata hai

        // loader={()=>{}}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
