import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'gatsby';

const AlbumTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <Link to="/">Go back</Link>
    <h1>{data.title}</h1>
    <h2>{data.artist.name}</h2>
    <p>{data.description}</p>
  </Layout>
);

export default AlbumTemplate;
