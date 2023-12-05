import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../app/routes';
import * as S from './home.styled';

const Main:React.FC = () => {
    const navigate = useNavigate();

    const goToChat = (): void => {
      navigate(Routes.chat);
    };
  
  return (
    <S.Container >
      <S.MainTitle variant='h1'>Get AI-Powered Expertise Easily
      </S.MainTitle>
      <S.MainBtn onClick={goToChat}>Try it now!</S.MainBtn>
    </S.Container>
  );
}

export default Main;