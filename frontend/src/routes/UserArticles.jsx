import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import CardsList from '../components/UserArticlesPage/CardsList.jsx';

const articles = [
  {
    id: 0,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    name: 'React Article',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum non diam eget posuere. Maecenas malesuada vitae turpis id malesuada. Donec ornare nibh a nunc facilisis, non porttitor felis convallis.',
    updatedAt: '2022-04-25 21:48:56',
  },
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png',
    name: 'MySql Article',
    description:
      'Suspendisse varius odio eget posuere auctor. Aenean nec purus ipsum. Integer orci tellus, blandit et mauris id, efficitur ornare nunc. Nulla et ex vel odio aliquet tempus. Sed tortor metus, viverra ac enim sit amet, dignissim efficitur tellus.',
    updatedAt: '2022-10-08 19:06:2',
  },

  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    name: 'Express Article',
    description:
      'Aliquam viverra sapien sed diam fermentum pellentesque. Nulla maximus enim a turpis sollicitudin lobortis. Praesent ut leo feugiat, tempor libero quis, lacinia libero. Duis nec dapibus nulla.',
    updatedAt: '2022-06-18 11:50:28',
  },

  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    name: 'Node Article',
    description:
      'Cras tincidunt lectus quis sem gravida sodales. Donec malesuada erat ut tellus tempus, nec vestibulum odio vulputate.',
    updatedAt: '2022-09-02 12:08:43',
  },
];

const UserArticles = () => {
  const handleAddArticle = () => {
    console.log('Add article');
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardsList articles={articles} />
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
            bottom: theme.spacing(3),
            right: theme.spacing(6),
          },
        })}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default UserArticles;
