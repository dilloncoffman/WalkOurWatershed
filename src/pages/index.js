import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import { Box, Text } from "@chakra-ui/core"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className="masthead"
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
