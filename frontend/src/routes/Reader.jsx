import Container from '@mui/material/Container';
import { useLoaderData } from 'react-router-dom';

import RemirrorReader from '../components/ReaderRoute/RemirrorReader.jsx';
import { apiAxios } from '../app/apiAxios.js';

const Reader = () => {
  const loaderData = useLoaderData();

  return (
    <Container maxWidth='md'>
      <RemirrorReader initialContent={loaderData} />
    </Container>
  );
};

export async function loader({ params }) {
  const { docId } = params;
  let content;
  try {
    const response = await apiAxios.get(`/article/get-article/${docId}`);
    content = response.data.article?.content;
    // Retirar depois
    if (content === 'article content') content = undefined;
    if (content === '') content = undefined;
  } catch (e) {
    console.error(e);
  }

  return content;
}

export default Reader;
