import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useFetcher, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectModal, closeModal } from '../../features/modal/modalSlice.js';
import React, {useState} from 'react'; 

const EditMetadataModal = () => {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const location = useLocation();
  const modal = useSelector(selectModal);
  const editMode = modal.type === 'edit-metadata';
  const [checked, setChecked] = useState(true); 
  const handleChange = () => { 
    setChecked(!checked); 
  }; 

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
          // console.log(formData.get("name"))
          formData.append('isPublic', checked)
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
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChange} />} label="Público"/>
          </FormGroup>
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
