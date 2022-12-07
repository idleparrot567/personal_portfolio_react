import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/project-data.json";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
 

  return (
    <div className="App">
     <Navbar>nav bar </Navbar>
     <Header>header </Header>
     {/*<canvas id='myThreeJsCanvas'/>*/}
     <Main></Main> 

     hello world
    </div>
  );
}

export default App;
