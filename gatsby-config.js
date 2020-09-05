module.exports = {
  siteMetadata: {
    title: `My Vinyl Shop`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'VINYL',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'vinyl',
        // Url to query from
        url:
          'https://api-eu-central-1.graphcms.com/v2/ckeo7b6q590lh01yx679d6w5p/master',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
