import React from 'react'
import {Container, Box, Heading, Text, Image, useColorModeValue} from '@chakra-ui/react'



export default function About() {
  return (
    <div>
        <Container>
          <Box overflow='hidden' 
          borderRadius='6px' 
          bg={useColorModeValue('#85C7DE', '#C6DBF0')}
          p={3} 
          mb={6} 
          align='center'>
            <Text color='white'>Hello, I&apos;m a CS and Medieval Studies Undergrad @ Brown. </Text>
          </Box>
          <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
              <Heading as='h2' variant='page-title' color='white'>
              RosettaStone
              </Heading>
              <Text color='white'>
              Student of Digital Craftsmanship (Musician / Developer / Medievalist)
              </Text>
            </Box>
            <Box 
            flexShrink={0} 
            mt ={{base:4, md: 0}}
            ml={{md: 6}}
            align='center'>
              <Image borderColor='white' borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="100%" src='/IMG_2017.jpg' alt="Profile Image"/> 
            </Box>

          </Box>
        </Container>
    </div> 
  );
}
