import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Flex, Icon, Text, PseudoBox } from "@chakra-ui/core"
import DrawerMenu from "./DrawerMenu"

const MenuItems = ({ children, link }) => (
  <GatsbyLink to={link}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </GatsbyLink>
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
            <PseudoBox
              as={GatsbyLink}
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                textShadow: "none",
                textUnderlinePosition: "none",
              }}
              fontSize={["sm", "md", "xl", "2xl"]}
            >
              {props.siteTitle}
            </PseudoBox>
          </Heading>
        </Flex>
        <Box
          justifyContent="flex-end"
          display={{ base: "none", sm: "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems link="/">
            <Icon name="home" mr="15px" size="30px" />
            Home
          </MenuItems>
          <MenuItems link="/log-miles">
            <Icon name="logMiles" mr="15px" size="30px" />
            Log Miles
          </MenuItems>
          <MenuItems link="/register">
            <Icon name="register" mr="15px" size="30px" />
            Register
          </MenuItems>
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
