import React from 'react';
import Layout from '../layout/Layout';
import { graphql } from 'gatsby';
import AlbumLink from '../components/AlbumLink/AlbumLink';
//Jest destrukturyzowane jako props data

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <h1>Albums</h1>
    {edges.map((page) => (
      <>
        <AlbumLink key={page.node.path} to={page.node.path}>
          {page.node.context.data.title}
        </AlbumLink>
      </>
    ))}
  </Layout>
);
//Te query
export const allAlbumPagesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "E:/GatsbyApp/vinylwebsite/src/templates/albumTemplate.js"
        }
      }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              title
              description
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
