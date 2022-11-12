export const SAMPLE_DOC = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        level: 1,
      },
      content: [
        {
          type: 'text',
          text: 'Heading 2',
        },
      ],
    },
    {
      type: 'heading',
      attrs: {
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: 'Heading 3',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Some text. ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
          text: 'Some bold text. ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://www.remirror.io',
                target: null,
                auto: false,
              },
            },
          ],
          text: 'A link',
        },
      ],
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
    },
    {
      type: 'codeBlock',
      attrs: { language: 'typescript', wrap: false },
      content: [{ type: 'text', text: 'A code block' }],
    },
    {
      type: 'paragraph',
    },
  ],
};
