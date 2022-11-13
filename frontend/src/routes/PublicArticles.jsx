import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useLoaderData } from 'react-router-dom';

import CardsList from '../components/PublicArticlesRoute/CardsList.jsx';
import { apiAxios } from '../app/apiAxios.js';


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
  const { data } = await apiAxios.get('/article/get-all-article');
  return data.articles;
}

export default PublicArticles;
