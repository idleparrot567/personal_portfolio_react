import {Link} from 'react-router-dom'
import{
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton, 
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import Logo from './Logo'
import ThemeToggleButton from './theme-toggle-button'
import {HamburgerIcon} from '@chakra-ui/icons'

import {HumburgerIcon} from '@chakra-ui/icons'

const LinkItem = ({to, path, target, pages, ...props}) => {
    const active = path === to
    const inactiveColor = useColorModeValue('white')
    return(
        <Link 
        to={`/${pages}`}
        p={2}
        bg={active ? 'glassTeal': undefined}
        color={active ? '#cfe8ef' : inactiveColor}
        >
        {pages}
        </Link>
    )

} 

const Nav = props => {
    const {path} = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#2E3B55')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
  
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem pages="Projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem pages="Blog" path={path}>
              Blog
            </LinkItem>
          </Stack>
  
          <Box flex={1} align="right">
            <ThemeToggleButton />
  
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                {/* <Link style={{textDecoration:'none', color:"#102E4A"}} to={`/`}>
                    <MenuItem as={Link}>About</MenuItem>
                </Link>
                <Link style={{textDecoration:'none', color:"#102E4A"}} to={`/Projects`}>
                    <MenuItem as={Link}> Portfolio</MenuItem>
                </Link>
                <Link style={{textDecoration:'none', color:"#102E4A"}} to={`/Blog`}>
                    <MenuItem as={Link}> Blog</MenuItem>
                </Link> */}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    )

}

export default Nav