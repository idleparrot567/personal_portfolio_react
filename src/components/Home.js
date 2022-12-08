import React from 'react';
import Main from "./Main"
import Container from '@mui/material/Container'
import Model from "./Model"

const Home = () => {
    return (
      <div>
      <Model></Model>
      <Container maxWidth="sm">
      <Main></Main> 
      </Container>
      </div>
    );
  };
    
  export default Home;