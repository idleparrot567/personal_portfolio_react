import React from 'react'
import LittlestTokyo from './LittlestTokyo'
import {Container} from '@chakra-ui/react'


export default function Model() {
  return (
      <Container centerContent>
        <div id='test'> 
        <canvas id='canvas'/>
        </div>
        <LittlestTokyo>Little Tokyo</LittlestTokyo>
      </Container>
  )
}
