import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/core"

const RegisterPage = () => {
  useEffect(() => {
    // Eventbrite code is loaded and embedded using the gatsby-plugin-load-script to load the static eventbrite.js file which appends the first script tag from the Eventbrite embed code to the <body>, that first script tag makes EBWidgets available to be used here
    // Loading this code in the useEffect() ensures these scripts aren't loaded until users navigate to the /register page which could present problems, see the following link:
    // https://github.com/gatsbyjs/gatsby/issues/13136 using componentDidMount
    // Issue in general with multiple solutions: https://stackoverflow.com/questions/54834930/how-to-include-local-javascript-on-a-gatsby-page
    const exampleCallback = () => {
      console.log("Order complete!")
    }

    if (typeof window !== undefined && window.EBWidgets !== undefined) {
      window.EBWidgets.createWidget({
        // Required
        widgetType: "checkout",
        eventId: "113162716732",
        iframeContainerId: "eventbrite-widget-container-113162716732",

        // Optional
        iframeContainerHeight: 800, // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback, // Method called when an order has successfully completed
      })
    }
  }, [])

  return (
    <Layout>
      <SEO title="Register" />
      <Box
        as="div"
        pt={5}
        m="0 auto"
        maxWidth={800}
        id="eventbrite-widget-container-113162716732"
      ></Box>
    </Layout>
  )
}

export default RegisterPage
