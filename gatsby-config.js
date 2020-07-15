require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jacobs Creek Watershed Association`,
    titleTemplate: `%s | Walk Our Watershed`,
    description: `Take a pledge to walk, bike or padding a combined 177 miles. 1 miles for each stream mile in Jacobs Creek Watershed. August 1st to September 30th.`,
    author: `@_dilloncoffman_`,
    siteUrl: `https://walk-our-watershed.netlify.app`,
    url: `https://walk-our-watershed.netlify.app`,
    image: `https://scontent.fpit1-1.fna.fbcdn.net/v/t1.0-9/28685822_1827052217325097_1166119453776150528_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=rNgMFHHBBh0AX9JACpc&_nc_ht=scontent.fpit1-1.fna&oh=2d6453930a2aeff082e4254d34a1c9f2&oe=5F2CF561`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `typography`,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/eventbrite.js",
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: process.env.GATSBY_GOOGLE_SHEET_ID,
        apiKey: process.env.GATSBY_GOOGLE_SHEET_API_KEY,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
