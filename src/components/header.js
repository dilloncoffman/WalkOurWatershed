import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Flex, Icon, Text, PseudoBox } from "@chakra-ui/core"
import DrawerMenu from "./DrawerMenu"

const MenuItems = ({ children, link }) => (
  <PseudoBox
    as={GatsbyLink}
    to={link}
    _hover={{ color: "green.400" }}
    _focus={{
      color: "green.400",
      outline: "none",
      boxShadow: "outline",
      borderRadius: 5,
    }}
  >
    <Text
      className="norwester"
      mt={{ base: 4, md: 0 }}
      ml={[2, 3, 3, 6]}
      display="block"
      fontSize={["0px", "0px", "15px", "18px"]}
    >
      {children}
    </Text>
  </PseudoBox>
)

const Header = props => {
  return (
    <header
      style={{
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
        bg="white"
        color="black"
        {...props}
      >
        <Flex align="center" mr={5}>
          <PseudoBox
            as={GatsbyLink}
            to="/"
            style={{
              textDecoration: "none",
              textShadow: "none",
              textUnderlinePosition: "none",
            }}
            fontSize={["sm", "md", "lg", "xl"]}
            color="slate.800"
            className="norwester"
            _hover={{ color: "green.400" }}
            _focus={{
              outline: "none",
              boxShadow: "outline",
              borderRadius: 5,
              color: "green.400",
            }}
          >
            Jacobs Creek{" "}
            <Box as="br" display={["block", "block", "none", "none"]} />
            Watershed Association
          </PseudoBox>
        </Flex>
        <Box
          justifyContent="flex-end"
          display={{ base: "none", sm: "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          color="slate.800"
        >
          <MenuItems link="/">
            <Icon
              name="home"
              mr="15px"
              fontSize={["0px", "20px", "20px", "30px"]}
            />
            Home
          </MenuItems>
          <MenuItems link="/log-miles">
            <Icon
              name="logMiles"
              mr="15px"
              fontSize={["0px", "20px", "20px", "30px"]}
            />
            Log Miles
          </MenuItems>
          <MenuItems link="/register">
            <Icon
              name="register"
              mr="15px"
              fontSize={["0px", "20px", "20px", "30px"]}
            />
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
