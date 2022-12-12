import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useFetcher, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectModal, closeModal } from '../../features/modal/modalSlice.js';

const DeleteArticleModal = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const fetcher = useFetcher();
  const modal = useSelector(selectModal);

  return (
    <Dialog
      open={modal.type === 'delete-article'}
      onClose={() => dispatch(closeModal())}
    >
      <DialogTitle>Deletar Artigo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que quer deletar este artigo? Esta operação não
          poderá ser desfeita posteriormente.
        </DialogContentText>
      </DialogContent>
      <Box
        component='form'
        onSubmit={(event) => {
          event.preventDefault();
          const { docId } = modal.data;
          fetcher.submit(null, {
            method: 'delete',
            action: `/sec/${userId}/${docId}/delete`,
          });
        }}
      >
        <DialogActions>
          <Button
            type='button'
            variant='outlined'
            autoFocus
            onClick={() => dispatch(closeModal())}
          >
            Cancelar
          </Button>
          <Button
            type='submit'
            variant='contained'
            data-cy='delete-modal-submit-btn'
          >
            Deletar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteArticleModal;
