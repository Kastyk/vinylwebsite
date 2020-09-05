import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const AlbumsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-top: 50px;
`;

const Albums = () => {
  const data = useStaticQuery(graphql`
    query {
      vinyl {
        albums {
          id
          title
          description
          price
          thumbnail
          artist {
            ... on VINYL_Artist {
              name
            }
          }
        }
      }
    }
  `);
  const {
    vinyl: { albums },
  } = data;
  return (
    <AlbumsWrapper>
      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.artist.name}</h2>
          <h3>{album.title}</h3>
          <p>{album.description}</p>
          <p>${album.price}</p>
          <img src={album.thumbnail} alt="Album's thumbnail" />
        </div>
      ))}
    </AlbumsWrapper>
  );
};

export default Albums;
