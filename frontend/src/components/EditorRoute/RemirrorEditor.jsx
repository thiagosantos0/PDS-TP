import './style.css';
import 'remirror/styles/all.css';

import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {
  HeadingExtension,
  BoldExtension,
  ItalicExtension,
  UnderlineExtension,
  LinkExtension,
} from 'remirror/extensions';
import {
  FloatingToolbar,
  Remirror,
  ThemeProvider,
  useRemirror,
  FloatingWrapper,
  BasicFormattingButtonGroup,
  ToggleHeadingButton,
  CommandButtonGroup,
} from '@remirror/react';

const RemirrorEditor = ({
  positioner = 'emptyBlockStart',
  placement = 'left',
}) => {
  const { manager, state, onChange } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new UnderlineExtension(),
      new LinkExtension(),
      new HeadingExtension({ levels: [2, 3], defaultLevel: 2 }),
    ],
    defaultSelection: 'end',
  });

  return (
    <Container maxWidth='md'>
      <ThemeProvider>
        <Remirror
          manager={manager}
          initialContent={state}
          onChange={onChange}
          autoFocus
          autoRender='end'
          placeholder='Enter your text'
        >
          <FloatingToolbar>
            <BasicFormattingButtonGroup />
            <CommandButtonGroup>
              <ToggleHeadingButton attrs={{ level: 2 }} icon='h1' />
              <ToggleHeadingButton attrs={{ level: 3 }} icon='h2' />
            </CommandButtonGroup>
          </FloatingToolbar>
          <FloatingWrapper
            positioner={positioner}
            placement={placement}
            renderOutsideEditor
          >
            <IconButton sx={{ mr: 1.5 }}>
              <AddIcon />
            </IconButton>
          </FloatingWrapper>
        </Remirror>
      </ThemeProvider>
    </Container>
  );
};

export default RemirrorEditor;
