import { useRef } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {
  redirect,
  useFetcher,
  useLoaderData,
  useParams,
  Navigate,
} from 'react-router-dom';

import RemirrorEditor from '../components/EditorRoute/RemirrorEditor.jsx';
import { apiAxios } from '../app/apiAxios.js';

const Editor = () => {
  const { userId } = useParams();
  const editorRef = useRef();
  const fetcher = useFetcher();
  const loaderData = useLoaderData();

  if (loaderData.status !== 200) return <Navigate to={`/${userId}/articles`} />;

  return (
    <Container maxWidth='md'>
      <Box
        component='form'
        onSubmit={(event) => {
          event.preventDefault();
          if (!editorRef.current) return;

          const state = editorRef.current.getState();
          const { getJSON } = editorRef.current.helpers;
          const formData = new FormData();
          formData.append('docId', 'docId');
          formData.append('content', JSON.stringify(getJSON(state)));
          fetcher.submit(formData, { method: 'post' });
        }}
      >
        <Toolbar sx={{ flexDirection: 'row-reverse' }}>
          <Button
            variant='contained'
            color='success'
            type='submit'
            sx={{
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
          >
            Publish
          </Button>
        </Toolbar>
        <RemirrorEditor ref={editorRef} initialContent={loaderData.content} />
      </Box>
    </Container>
  );
};

export async function action({ request, params }) {
  const { userId, docId } = params;
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { content } = updates;

  try {
    await apiAxios.put(`/article/update-article/${docId}`, { content });
  } catch (e) {
    console.error(e);
  }

  return redirect(`/${userId}/articles`);
}

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

export default Editor;
