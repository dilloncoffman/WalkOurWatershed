import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link as GatsbyLink } from "gatsby"
import {
  Box,
  CircularProgress,
  Progress,
  Text,
  SimpleGrid,
  PseudoBox,
} from "@chakra-ui/core"

const IndexPage = ({ data }) => {
  const [eventTotal, setEventTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://www.eventbriteapi.com/v3/organizations/${process.env.GATSBY_EVENTBRITE_ORG}/reports/sales/?date_facet=event_day&event_ids=113162716732&net_sales_consistency=on&token=${process.env.GATSBY_EVENTBRITE_TOKEN}`
    )
      .then(response => response.json())
      .then(resultData => {
        setEventTotal(resultData.totals.net)
        setLoading(false)
      })
  }, [])

  const goal = 1000
  let pageData = {}

  const getTotalMiles = eventRegistrations => {
    let sum = 0
    eventRegistrations.forEach(eventR => {
      sum += parseInt(eventR.miles, 10)
    })
    return sum
  }

  const getProgressToGoal = totalRaised => {
    return (totalRaised / goal) * 100
  }

  pageData.totalMiles = getTotalMiles(data.allGoogleFormResponses1Sheet.nodes)
  pageData.totalRaised = eventTotal
  pageData.progressToGoal = getProgressToGoal(eventTotal)

  return (
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
          <Box px={[0, 4, 6, 10]} pt={2} textAlign="center">
            <Text fontWeight="bold" color="white" fontSize={[30, 40]}>
              Total Raised
            </Text>
            {loading ? (
              <CircularProgress
                mt={3}
                isIndeterminate
                color="teal"
              ></CircularProgress>
            ) : (
              <Text fontWeight="bold" color="white" fontSize="70px">
                ${pageData.totalRaised}
              </Text>
            )}
          </Box>
        </Box>
        <Box bg="teal.400" height="200px">
          <Box px={10} pt={[5, 5, 5, 5]} fontSize={[30]} textAlign="center">
            <Text pb={2} fontWeight="bold" color="white">
              Progress to our $1,000 goal:
            </Text>
            {loading ? (
              <CircularProgress isIndeterminate color="teal"></CircularProgress>
            ) : (
              <Progress
                color="teal"
                height={["50px", "60px", "60px", "100px"]}
                value={pageData.progressToGoal}
              />
            )}
          </Box>
        </Box>
      </SimpleGrid>
      <Box mt={5} bg="teal.200" height="200px">
        <Box px={[0, 4, 6, 10]} pt={2} textAlign="center">
          <Text fontWeight="bold" color="white" fontSize={[30, 40]}>
            Total Miles Covered
          </Text>
          <Text fontWeight="bold" color="white" fontSize="70px">
            {pageData.totalMiles}
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
}

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "walk-our-watershed-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allGoogleFormResponses1Sheet {
      nodes {
        gross
        fullName
        email
        timestamp
        date
        miles
      }
      distinct(field: gross)
    }
  }
`

export default IndexPage
