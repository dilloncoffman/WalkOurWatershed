import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Walk Our Watershed</h1>
    <Box as="h1" color="green.500" fontSize="2xl">
      Hello World
    </Box>
  </Layout>
)

export default IndexPage
