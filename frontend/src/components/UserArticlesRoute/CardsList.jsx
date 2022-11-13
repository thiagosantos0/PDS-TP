import React, { memo } from 'react';
import Box from '@mui/material/Box';

import CardItem from './CardItem';

const CardsList = ({ articles }) => {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: 'min(1200px, 85%)',
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      }}
    >
      {articles.map(({ id: docId, image, name, description, updatedAt }) => (
        <CardItem
          docId={docId}
          image={image}
          name={name}
          description={description}
          updatedAt={updatedAt}
          key={docId}
        />
      ))}
    </Box>
  );
};

export default memo(CardsList);
