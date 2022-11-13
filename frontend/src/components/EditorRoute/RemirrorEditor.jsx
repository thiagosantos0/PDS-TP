import 'remirror/styles/all.css';

import { useImperativeHandle, forwardRef, useMemo } from 'react';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  HeadingExtension,
  BoldExtension,
  ItalicExtension,
  UnderlineExtension,
  LinkExtension,
  CodeBlockExtension,
} from 'remirror/extensions';
import {
  FloatingToolbar,
  Remirror,
  useRemirror,
  FloatingWrapper,
  BasicFormattingButtonGroup,
  ToggleHeadingButton,
  CommandButtonGroup,
} from '@remirror/react';
import { isString } from 'remirror';

import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';

import useMenu from './useMenu.js';
import MenuButton from './MenuButton.jsx';
import FloatingLinkToolbar from './FloatingLinkToolbar.jsx';

const RemirrorEditor = ({ initialContent }, ref) => {
  const content = useMemo(() => {
    const string = isString(initialContent);
    return string ? JSON.parse(initialContent) : initialContent;
  }, [initialContent]);

  const upMd = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { handleClick, handleClickAway, isOpen } = useMenu();
  const { manager, state, onChange, getContext } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new UnderlineExtension(),
      new LinkExtension({ autoLink: true }),
      new HeadingExtension({ levels: [2, 3], defaultLevel: 2 }),
      new CodeBlockExtension({
        supportedLanguages: [css, javascript, json, markdown, typescript],
      }),
    ],
    content,
    defaultSelection: 'end',
  });

  useImperativeHandle(ref, () => getContext(), [getContext]);

  return (
    <Box
      className='remirror-theme'
      sx={{
        '.remirror-editor': {
          boxShadow: 'none !important',
          overflowY: 'hidden !important',
          minHeight: '20rem',
          px: {
            xs: 3,
            md: 7,
          },
          py: {
            xs: 7,
            md: 1,
          },
        },
      }}
    >
      <Remirror
        manager={manager}
        initialContent={state}
        onChange={onChange}
        autoFocus
        autoRender='end'
        placeholder='Enter your text'
      >
        {/* Toolbar */}
        <FloatingToolbar>
          <BasicFormattingButtonGroup />
          <CommandButtonGroup>
            <ToggleHeadingButton attrs={{ level: 2 }} icon='h1' />
            <ToggleHeadingButton attrs={{ level: 3 }} icon='h2' />
          </CommandButtonGroup>
        </FloatingToolbar>
        <FloatingLinkToolbar />
        {/* Menu Button */}
        <FloatingWrapper
          positioner='emptyBlockStart'
          placement={upMd ? 'left' : 'bottom'}
        >
          <ClickAwayListener
            onClickAway={handleClickAway}
            mouseEvent='onPointerDown'
            touchEvent='onTouchStart'
          >
            <MenuButton onClick={handleClick}>
              <CloseIcon
                sx={{
                  transform: isOpen ? 'none' : 'rotate(-45deg)',
                  transition: 'all .2s ease-in-out',
                }}
              />
            </MenuButton>
          </ClickAwayListener>
          {/* Menu */}
        </FloatingWrapper>
        <FloatingWrapper
          positioner='emptyBlockStart'
          placement={upMd ? 'right' : 'top'}
        >
          <Grow in={isOpen}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <MenuButton
                onClick={({ toggleCodeBlock }) => toggleCodeBlock()}
                tip='Code Block'
              >
                <CodeIcon />
              </MenuButton>
            </Box>
          </Grow>
        </FloatingWrapper>
      </Remirror>
    </Box>
  );
};

export default forwardRef(RemirrorEditor);
