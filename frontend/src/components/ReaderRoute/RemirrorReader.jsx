import { useMemo } from 'react';
import {
  Callout,
  CodeBlock,
  createIFrameHandler,
  createLinkHandler,
  Doc,
  Heading,
  RemirrorRenderer,
  TextHandler,
  ThemeProvider,
} from '@remirror/react';
import { isString } from 'remirror';

const typeMap = {
  blockquote: 'blockquote',
  bulletList: 'ul',
  callout: Callout,
  codeBlock: CodeBlock,
  doc: Doc,
  hardBreak: 'br',
  heading: Heading,
  horizontalRule: 'hr',
  iframe: createIFrameHandler(),
  image: 'img',
  listItem: 'li',
  paragraph: 'p',
  orderedList: 'ol',
  text: TextHandler,
};

const markMap = {
  italic: 'em',
  bold: 'strong',
  code: 'code',
  link: createLinkHandler({ target: '_blank' }),
  underline: 'u',
};

const RemirrorReader = ({ initialContent = '{"type":"doc","content":[]}' }) => {
  const content = useMemo(() => {
    const string = isString(initialContent);
    return string ? JSON.parse(initialContent) : initialContent;
  }, [initialContent]);

  return (
    <ThemeProvider>
      <RemirrorRenderer json={content} typeMap={typeMap} markMap={markMap} />
    </ThemeProvider>
  );
};

export default RemirrorReader;
