import React from 'react';
import Main from "./Main"
import {Container} from '@chakra-ui/react'
// import Container from '@mui/material/Container'
import Model from "./Model"

const Home = () => {
    return (
      <div>
     <div id="model">
      <Container maxWidth="md" centerContent>
      <div id='goHere'>
        <Model></Model>
      </div>  
      <Main></Main> 
      </Container>
      </div>

       <div>
       <Container maxWidth="md" centerContent>
      
         </Container> 
     </div>

      </div>


    
    );
  };
    
  export default Home;