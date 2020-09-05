import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nie znaleziono</h1>
    <p>Przykro Nam, ale nie znaleziono takiej strony.</p>
  </Layout>
);

export default NotFoundPage;
