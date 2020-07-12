import React from "react"
import { Flex, Link, Text, PseudoBox } from "@chakra-ui/core"

const Footer = ({ siteTitle }) => (
  <Flex
    as="footer"
    justify="space-between"
    alignItems="center"
    flexDirection="column"
    mt="1.25rem"
    fontSize={["15px", "sm", "sm", "sm"]}
  >
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
