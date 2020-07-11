import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Heading, Flex, Text } from "@chakra-ui/core"
import DrawerMenu from "./DrawerMenu"

const MenuItems = ({ children }) => (
  <Text color="red" mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = props => {
  return (
    <header
      style={{
        backgroundColor: "blue",
        marginBottom: `1.45rem`,
        position: "fixed",
        right: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="slate.800"
        color="white"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"} m={0}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                textShadow: "none",
                textUnderlinePosition: "none",
              }}
            >
              {props.siteTitle}
            </Link>
          </Heading>
        </Flex>
        <Box
          justifyContent="flex-end"
          display={{ sm: "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems>Home</MenuItems>
          <MenuItems>Log Miles</MenuItems>
          <MenuItems>Register</MenuItems>
        </Box>
        <Box display={{ sm: "block", md: "none" }}>
          <DrawerMenu />
        </Box>
      </Flex>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
