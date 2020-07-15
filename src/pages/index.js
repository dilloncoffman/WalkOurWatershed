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
      <SEO title="Home" image="/../../JCWA-Logo.png" />
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
      <SimpleGrid
        borderBottom="3px white solid"
        columns={[1, null, 2]}
        spacing={0}
      >
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
      <Box borderTop="3px white solid" bg="teal.200" height="200px">
        <Box px={[0, 4, 6, 10]} pt={2} textAlign="center">
          <Text fontWeight="bold" color="white" fontSize={[30, 40]}>
            Total Miles Covered
          </Text>
          <Text fontWeight="bold" color="white" fontSize="70px">
            {pageData.totalMiles}
          </Text>
        </Box>
      </Box>
      <Box
        maxW={900}
        mt={[5, 5, 10, 10]}
        mx={[3, 5, 5, "auto"]}
        fontSize={["18px", "sm", "md"]}
      >
        <Text mb={3}>
          During these uncertain times of COVID-19 and social distancing, we
          have kept moving forward and are still taking steps to uphold our
          mission. Walk Our Watershed allows our community to virtually unite
          and explore new ways to connect with one another and the remarkable
          ecosystem we work to defend. Together we can take a pledge to focus on
          healthy habits and a healthy watershed!
        </Text>
        <Text mb={3}>
          From August 1 - September 30th, 2020, walkers, bikers and paddlers
          from across multiple communities can take a pledge to cover a combined
          177 miles, the total number of stream miles in Jacobs Creek Watershed.
          Participants will raise awareness and vital funding for JCWA every
          step of the way. Donate any amount of money for your pledge, even $1.
          All participants will receive a JCWA magnet. Donations of $50 or more
          will be rewarded with a Walk Our Watershed 2020 t-shirt after
          September 30th! You will also receive weekly email updates of the
          leaderboard to see who’s Walking our Watershed, a JCWA video with
          place ideas to explore and some motivation to venture our watershed or
          your own backyard.
        </Text>
        <Text mb={3}>
          Jacobs Creek Watershed Association is a non-profit organization
          dedicated to the conservation of our natural resources, rehabilitation
          of the creek and watershed, environmental education and recreation.
          For over 20 years we have been educating thousands of people,
          resolving storm water issues, conserving our watershed and making it a
          more beautiful and inviting place.
        </Text>
        <Text mb={3}>
          With the support of people like{" "}
          <Text as="span" display="inline" fontWeight="bold">
            you
          </Text>{" "}
          who understand the value of the vital relationship between these
          concepts, we will save our watershed and continue the vital work we do
          for our local community.
        </Text>
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
