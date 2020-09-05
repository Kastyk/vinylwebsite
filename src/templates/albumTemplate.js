import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import AlbumWrapper from '../components/AlbumWrapper/AlbumWrapper';

const AlbumTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <Link to="/">Go back</Link>
    <AlbumWrapper>
      <div>
        <img src={data.thumbnail} alt="Album cover" />
      </div>
      <div>
        <h1>{data.title}</h1>
        <h2>{data.artist.name}</h2>
        <p>{data.description}</p>
      </div>
    </AlbumWrapper>
  </Layout>
);

export default AlbumTemplate;
