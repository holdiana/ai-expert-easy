import React from 'react';
import { Typography } from '@mui/material';
import * as S from './home.styled';

const Home:React.FC = () => {
  
  return (
    <S.Container >
      <Typography variant="h4">Home Page 111</Typography>
      <Typography variant='h1'>Test git</Typography>
      {/* Render your table here using the data */}
    </S.Container>
  );
}

export default Home;