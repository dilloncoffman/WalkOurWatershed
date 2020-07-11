module.exports = {
  siteMetadata: {
    title: `Jacobs Creek Watershed Association`,
    titleTemplate: `%s | Walk Our Watershed`,
    description: `Support and explore your local watershed!`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
