const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const albumTemplate = path.resolve(`src/templates/albumTemplate.js`);
  const albumsQuery = await graphql(`
    {
      vinyl {
        albums: albumsConnection(first: 100) {
          edges {
            node {
              stage
              updatedAt
              createdAt
              id
              title
              description
              price
              artist {
                ... on VINYL_Artist {
                  id
                  name
                }
              }
              thumbnail
              slug
            }
          }
        }
      }
    }
  `);
  albumsQuery.data.vinyl.albums.edges.forEach((album) => {
    createPage({
      path: album.node.slug,
      component: albumTemplate,
      context: {
        data: album.node,
      },
    });
  });
};
