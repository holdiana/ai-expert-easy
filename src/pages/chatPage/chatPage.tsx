import React from 'react';
import { Typography } from '@mui/material';
import * as S from './chatPage.styled';

const Home:React.FC = () => {
  
  return (
    <S.Container >
      <Typography variant="h4">Chat Page</Typography>
      {/* Render your table here using the data */}
    </S.Container>
  );
}

export default Home;