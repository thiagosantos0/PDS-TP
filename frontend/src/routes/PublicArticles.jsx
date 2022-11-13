import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useLoaderData } from 'react-router-dom';

import CardsList from '../components/PublicArticlesRoute/CardsList.jsx';
import axios from 'axios';


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
  const articles = axios({
    method: 'get',
    url: 'http://localhost:3000/api/article/get-all-article',
  })
  .then(function (response) {
    return response.data.articles;
  },function(e) {
    console.log(e);
  });

  return articles;
}

export default PublicArticles;
