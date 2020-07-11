import React from "react"
import { Box, Flex, Link } from "@chakra-ui/core"

const Footer = ({ siteTitle }) => (
  <Flex
    as="footer"
    justify="space-between"
    alignItems="center"
    flexDirection="column"
    mt="1.25rem"
    fontSize={["sm", "md", "lg", "xl"]}
  >
    {siteTitle} © {new Date().getFullYear()}
    <Box mb="1.25rem">
      Developed by {` `}
      <Link href="https://www.dilloncoffman.com/" isExternal>
        Dillon Coffman
      </Link>{" "}
    </Box>
  </Flex>
)

export default Footer
