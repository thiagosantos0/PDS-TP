import Container from '@mui/material/Container';
import { useLoaderData, Navigate } from 'react-router-dom';

import RemirrorReader from '../components/ReaderRoute/RemirrorReader.jsx';
import { apiAxios } from '../app/apiAxios.js';

const Reader = () => {
  const loaderData = useLoaderData();

  if (loaderData.status !== 200) return <Navigate to='/articles' />;

  return (
    <Container maxWidth='md'>
      <RemirrorReader initialContent={loaderData.content} />
    </Container>
  );
};

export async function loader({ params }) {
  const { docId } = params;
  let data = {};
  try {
    const response = await apiAxios.get(`/article/get-article/${docId}`);
    data.content = response.data.article?.content;
    data.status = response.status;
    // Retirar depois
    if (data.content === 'article content') data.content = undefined;
    if (data.content === '') data.content = undefined;
  } catch (e) {
    data.status = e.response.status;
    console.error(e);
  }

  return data;
}

export default Reader;
