import React from 'react';
import Main from "./Main"
import Container from '@mui/material/Container'
import Model from "./Model"

const Home = () => {
    return (
      <div>
     <div id="model">
      <Container maxWidth="sm">
      <div id='goHere'>
        <Model></Model>
      </div>  
      </Container>
      </div>
       <div>
       <Container maxW="md">
       <Main></Main> 
         </Container> 
     </div>

      </div>


    
    );
  };
    
  export default Home;
