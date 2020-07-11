import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  IconButton,
  PseudoBox,
  Stack,
  useDisclosure,
} from "@chakra-ui/core"

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = useState("top")

  return (
    <>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        variant="outline"
        aria-label="Open navigation menu"
        icon="menu"
        onClick={onOpen}
        height={["2rem", "2rem", "0px", "0px"]}
        minW={["2rem", "2rem", "0px", "0px"]}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            mt="6px"
            _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
            _focus={{
              outline: "none",
              bg: "gray.200",
              boxShadow: "outline",
              borderRadius: 5,
              color: "#004173",
            }}
          />
          <DrawerHeader borderBottomWidth="1px">
            <br />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={8}>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  color: "#004173",
                }}
              >
                <Box px={4}>
                  <Icon name="home" mr="15px" size="30px" />
                  Home
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/log-miles"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  color: "#004173",
                }}
              >
                <Box px={4}>
                  <Icon name="logMiles" mr="15px" size="30px" />
                  Log Miles
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/register"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  color: "#004173",
                }}
              >
                <Box px={4}>
                  <Icon name="register" mr="15px" size="30px" />
                  Register
                </Box>
              </PseudoBox>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu
