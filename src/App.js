import "./index.css";
import bakeryData from "./assets/project-data.json";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
// import {Routes, Route} from 'react-router'
import {Routes, Route} from 'react-router';
import { ChakraProvider } from '@chakra-ui/react'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
 
  return (
      <div clasname='APP'>
        <ChakraProvider>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Projects" element={<Projects/>}/>
        </Routes>
        </ChakraProvider>
    </div>
  );
}

export default App;
