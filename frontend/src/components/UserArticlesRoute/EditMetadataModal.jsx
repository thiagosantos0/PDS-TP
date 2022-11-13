import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useFetcher, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectModal, closeModal } from '../../features/modal/modalSlice.js';

const EditMetadataModal = () => {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const location = useLocation();
  const modal = useSelector(selectModal);
  const editMode = modal.type === 'edit-metadata';

  return (
    <Dialog
      open={editMode || modal.type === 'create-article'}
      onClose={() => dispatch(closeModal())}
    >
      <DialogTitle>{modal.meta.title}</DialogTitle>
      <Box
        component='form'
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          if (editMode) formData.append('docId', modal.data.docId);
          fetcher.submit(formData, {
            method: 'post',
            action: editMode
              ? location.pathname
              : `${location.pathname}/create`,
          });
        }}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='name'
            name='name'
            label='Nome do Artigo'
            autoComplete='name'
            fullWidth
            multiline
            maxRows={4}
            required
            defaultValue={modal.data.name}
          />
          <TextField
            autoFocus
            margin='normal'
            id='image'
            name='image'
            label='Imagem'
            fullWidth
            multiline
            maxRows={4}
            required
            defaultValue={modal.data.image}
          />
          <TextField
            autoFocus
            margin='normal'
            id='description'
            name='description'
            label='Descrição'
            fullWidth
            multiline
            maxRows={4}
            required
            defaultValue={modal.data.description}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type='button'
            variant='outlined'
            autoFocus
            onClick={() => dispatch(closeModal())}
          >
            Cancelar
          </Button>
          <Button type='submit' variant='contained'>
            Enviar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditMetadataModal;
