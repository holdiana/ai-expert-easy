import React from 'react';
import * as S from './chatPage.styled';
import ChatHeader from './chatHeader';
import ChatBody from './chatBody';
import { Button } from '@mui/material';
import { Routes } from '../../app/routes';
import { useNavigate } from 'react-router-dom';

const ChatPage:React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = (): void => {
    navigate(Routes.home);
  };
  return (
    <S.ChatPageContainer >
      <ChatHeader/>
      <ChatBody/>
      <Button onClick={goToHomePage}> Go Home Page</Button>
    </S.ChatPageContainer>
  );
}

export default ChatPage;