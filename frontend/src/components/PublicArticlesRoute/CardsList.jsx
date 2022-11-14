import React, { memo } from 'react';
import Box from '@mui/material/Box';

import CardItem from './CardItem';

const CardsList = ({ articles }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        gridAutoRows: '1fr',
      }}
    >
      {articles.map(
        ({
          id: docId,
          userId,
          userName,
          image,
          title,
          description,
          updatedAt,
        }) => (
          <CardItem
            docId={docId}
            userId={userId}
            image={image}
            name={title}
            description={description}
            updatedAt={updatedAt}
            userName={userName}
            key={docId}
          />
        ),
      )}
    </Box>
  );
};

export default memo(CardsList);
