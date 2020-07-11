import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Avatar, Box, Heading, Text, Stack } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Walk Our Watershed</h1>
    <Heading color="green.500" fontSize="2xl">
      Hello World
    </Heading>
  </Layout>
)

export default IndexPage
