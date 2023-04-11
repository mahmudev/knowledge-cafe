import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Articles from "./component/Articles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Articles></Articles>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
