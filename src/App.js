import "./index.css";
import bakeryData from "./assets/project-data.json";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import {Routes, Route} from 'react-router'
import Main from "./components/Main"
import Container from '@mui/material/Container'
import Model from "./components/Model"


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
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Projects" element={<Projects/>}/>
        </Routes>

        {/* <div>
      <Model></Model>
      <Container maxWidth="sm">
      <Main></Main> 
      </Container>
      </div> */}
    </div>
  );
}

export default App;
