import {Text, 
    Image,
    useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
> svg {
  transition: 200ms ease;
}
&:hover > svg {
  transform: rotate(20deg);
}
`
const Logo = () => {
    const stoneImg = process.env.PUBLIC_URL +'/rosetta.svg';
    console.log(stoneImg);
    return (
        <Link to="/">
            <LogoBox>
                <Image src={stoneImg} width={20} height={20} alt='rosetta stone'/> 
                <Text
                color={useColorModeValue('gray.800', 'white')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight='bold'
                ml={3}> 
                RosettaStone
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;