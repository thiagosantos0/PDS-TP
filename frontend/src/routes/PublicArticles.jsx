import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useLoaderData } from 'react-router-dom';

import CardsList from '../components/PublicArticlesRoute/CardsList.jsx';

import { SAMPLE_ARTICLES } from '../components/sample-articles.js';

const PublicArticles = () => {
  const loaderData = useLoaderData();

  return (
    <Container maxWidth='md'>
      <Box sx={{ mb: 10 }}>
        <CardsList articles={loaderData} />
      </Box>
    </Container>
  );
};

export async function loader() {
  return SAMPLE_ARTICLES;
}

export default PublicArticles;
