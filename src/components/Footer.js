import React from "react"
import { Box, Flex, Link, Text, PseudoBox } from "@chakra-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => (
  <Flex
    as="footer"
    justify="space-between"
    alignItems="center"
    flexDirection="column"
    mt="1.25rem"
    fontSize={["15px", "sm", "sm", "sm"]}
  >
    <Box mb={8}>
      <Link
        href="https://www.facebook.com/jacobscreekwatershed"
        color="#305479"
        isExternal
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </Link>
      <Link
        ml={6}
        href="https://www.jacobscreekwatershed.org/"
        color="#305479"
        isExternal
      >
        <FontAwesomeIcon icon={faLink} size="3x" />
      </Link>
    </Box>

    <Text>
      {siteTitle} © {new Date().getFullYear()}
    </Text>
    <Text mb="1.25rem">
      Developed by {` `}
      <PseudoBox
        as={Link}
        href="https://www.dilloncoffman.com/"
        _hover={{ bg: "gray.200", borderRadius: 5, color: "green.400" }}
        isExternal
      >
        Dillon Coffman
      </PseudoBox>{" "}
    </Text>
  </Flex>
)

export default Footer
