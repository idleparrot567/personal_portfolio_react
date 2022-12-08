import React from 'react'
import {motion} from 'framer-motion'
import {chakra, shouldForwardProp} from '@chakra-ui/react'


export default function Work({children, delay=0}) {
  const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
      return shouldForwardProp(prop) || prop === 'transition'
    }
  }
  )
  return (
      <StyledDiv
      initial={{y:10, opacity:0}}
      animate={{y:10, opacity:1}}
      transition={{duration: 0.8, delay}}
      mb={6}
      >
        {children}
      </StyledDiv>
  )
}
