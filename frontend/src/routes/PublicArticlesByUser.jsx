import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardsList from '../components/PublicArticlesRoute/CardsList.jsx';

import { useLoaderData } from 'react-router-dom';
import { apiAxios } from '../app/apiAxios.js';

const PublicArticlesByUser = () => {
  const loaderData = useLoaderData();

  return (
    <Container maxWidth='md'>
      <Box sx={{ mb: 10 }}>
        <CardsList articles={loaderData} />
      </Box>
    </Container>
  );
};

export async function loader({ params }) {
  const { data } = await apiAxios.get(
    `/article/get-articles-by-user/${params.userId}`,
  );
  return data;
}

export default PublicArticlesByUser;
