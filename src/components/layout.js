import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box } from "@chakra-ui/core"
import { ThemeProvider } from "emotion-theming"
import theme from "../../theme"
import Footer from "./Footer"

import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Box bg="slate.50" minHeight="100vh" color="black">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box as="main" paddingTop={[96, 104, 77, 81]}>
          {children}
        </Box>
        <Footer siteTitle="Jacobs Creek Watershed Association" />
      </Box>
      <div id="eventbrite-widget-container-113162716732"></div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
