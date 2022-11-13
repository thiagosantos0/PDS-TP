import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CardsList from '../components/UserArticlesRoute/CardsList.jsx';
import EditMetadataModal from '../components/UserArticlesRoute/EditMetadataModal.jsx';
import DeleteArticleModal from '../components/UserArticlesRoute/DeleteArticleModal.jsx';
import { closeModal, openModal } from '../features/modal/modalSlice.js';

import { apiAxios } from '../app/apiAxios.js';

const UserArticles = () => {
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  // Fecha o modal quando 'loaderData' é atualizado.
  // (Click no botão 'enviar do modal')
  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch, loaderData]);

  const handleAddArticle = () => {
    dispatch(
      openModal({
        type: 'create-article',
        meta: {
          title: 'Inserir Metadados do Artigo',
        },
        data: {},
      }),
    );
  };

  return (
    <Box sx={{ pb: 10 }}>
      <EditMetadataModal />
      <DeleteArticleModal />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardsList articles={loaderData} />
      </Box>
      <Fab
        color='primary'
        size='medium'
        aria-label='adicionar'
        onClick={handleAddArticle}
        sx={(theme) => ({
          position: 'fixed',
          bottom: theme.spacing(3),
          right: theme.spacing(3),

          [theme.breakpoints.up('md')]: {
            right: theme.spacing(6),
          },
        })}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  return { ok: true };
}

export async function loader({ params }) {
  const { data } = await apiAxios.get(`/article/get-articles-by-user/${params.userId}`);
  console.log(data.articles);
  return data.articles;
}

export default UserArticles;
