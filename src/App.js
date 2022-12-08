import "./index.css";
import { useState } from "react";
import bakeryData from "./assets/project-data.json";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

import Container from '@mui/material/Container';
import Box from '@mui/material/Container';
import Model from "./components/Model";


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
      <Model></Model>
      <Container>
      <Box>
      fugyugyug
      <Main></Main> 
      jijoijojoijj
      </Box>
      </Container>
     
  
    </div>
  );
}

export default App;
