import { useRef } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { redirect, useFetcher, useLoaderData } from 'react-router-dom';

import RemirrorEditor from '../components/EditorRoute/RemirrorEditor.jsx';
import { apiAxios } from '../app/apiAxios.js';

const Editor = () => {
  const editorRef = useRef();
  const fetcher = useFetcher();
  const loaderData = useLoaderData();

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
        <RemirrorEditor ref={editorRef} initialContent={loaderData} />
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

export default Editor;
