import React from "react"
import { Flex, Link, Text } from "@chakra-ui/core"

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
      <Link href="https://www.dilloncoffman.com/" isExternal>
        Dillon Coffman
      </Link>{" "}
    </Text>
  </Flex>
)

export default Footer
