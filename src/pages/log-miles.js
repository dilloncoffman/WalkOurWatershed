import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AspectRatioBox, Box } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Log Miles" />
    <AspectRatioBox
      overflow="hidden"
      width="100%"
      height="100%"
      ratio={1 / 1.45}
    >
      <Box
        as="iframe"
        overflow="hidden"
        title="Walk Our Watershed"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdxKL7Um4mUrmzweWnMYiS7TiRSzYqxxp-1bI3MqJHfHIKwbw/viewform?embedded=true"
      />
    </AspectRatioBox>
  </Layout>
)

export default IndexPage
