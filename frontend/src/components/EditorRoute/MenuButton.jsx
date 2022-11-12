import { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useCommands } from '@remirror/react';

const MenuButton = forwardRef(function MenuButton(
  { children, onClick, tip = '' },
  ref,
) {
  const commands = useCommands();

  return (
    <Tooltip title={tip}>
      <IconButton
        sx={{
          border: 1,
          borderColor: 'secondary.main',
        }}
        size='small'
        color='secondary'
        onClick={() => onClick(commands)}
        ref={ref}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
});

export default MenuButton;
