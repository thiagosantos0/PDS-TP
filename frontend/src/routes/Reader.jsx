import Container from '@mui/material/Container';
import { useLoaderData } from 'react-router-dom';

import RemirrorReader from '../components/ReaderRoute/RemirrorReader.jsx';
import { SAMPLE_DOC } from '../components/sample-doc.js';

const Reader = () => {
  const loaderData = useLoaderData();

  return (
    <Container maxWidth='md'>
      <RemirrorReader initialContent={loaderData} />
    </Container>
  );
};

export async function loader() {
  return SAMPLE_DOC;
}

export default Reader;
