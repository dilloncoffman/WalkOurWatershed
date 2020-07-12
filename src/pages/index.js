import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Progress, Text, SimpleGrid, PseudoBox } from "@chakra-ui/core"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className="hero-container"
      fluid={data.indexImage.childImageSharp.fluid}
    >
      <Box className="black-overlay">
        <Box className="content-box" mx={[3, 5, "auto", "auto"]}>
          <Box
            as="h1"
            className="content-box--hero-title"
            textTransform="uppercase"
            fontWeight="bold"
            mb={3}
          >
            Walk Our Watershed
          </Box>
          <Text
            fontSize={["18px", "sm", "md"]}
            textTransform="uppercase"
            mb={3}
          >
            Take a pledge to walk, bike or paddle a combined 177 miles. 1 mile
            for each stream mile in Jacobs Creek Watershed.
          </Text>
          <Text textTransform="uppercase">August 1st to September 30th</Text>
        </Box>
      </Box>
    </BackgroundImage>
    <SimpleGrid columns={[1, null, 2]} spacing={0}>
      <Box bg="teal.200" height="200px">
        <Box px={10} pt={2} textAlign="center">
          <Text fontWeight="bold" color="white" fontSize={[30, 40]}>
            Total Raised
          </Text>
          <Text fontWeight="bold" color="white" fontSize="70px">
            $505
          </Text>
        </Box>
      </Box>
      <Box bg="teal.400" height="200px">
        <Box px={10} pt={[5, 5, 5, 5]} fontSize={[30]} textAlign="center">
          <Text pb={2} fontWeight="bold" color="white">
            Progress to our $1,000 goal:
          </Text>
          <Progress
            color="teal"
            height={["50px", "60px", "60px", "100px"]}
            value={60}
          />
        </Box>
      </Box>
    </SimpleGrid>
    <Box mt={5} bg="teal.200" height="200px">
      <Box px={10} pt={2} textAlign="center">
        <Text fontWeight="bold" color="white" fontSize={[30, 40]}>
          Total Miles Covered
        </Text>
        <Text fontWeight="bold" color="white" fontSize="70px">
          1123
        </Text>
      </Box>
    </Box>
    <Box className="norwester" my={10} textAlign="center">
      <PseudoBox
        as={GatsbyLink}
        to="/register"
        backgroundColor="yellow.400"
        borderRadius={5}
        color="white"
        padding={3}
        px={10}
        _hover={{ backgroundColor: "green.400", color: "gray.100" }}
        _focus={{
          outline: "none",
          boxShadow: "outline",
          borderRadius: 5,
          backgroundColor: "green.400",
          color: "gray.100",
        }}
      >
        Register Here
      </PseudoBox>
    </Box>
  </Layout>
)

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "walk-our-watershed-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
