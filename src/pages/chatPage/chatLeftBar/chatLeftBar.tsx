import React from 'react';
import * as S from './chatLeftBar.styled';

const ChatLeftBar:React.FC = () => {
  
  return (
    <S.Container >
        <S.LeftBarHeader>
          <S.ChatLogo>AIExpertChat</S.ChatLogo>
          <S.NewChat>New Chat</S.NewChat>
        </S.LeftBarHeader>
     
    </S.Container>
  );
}

export default ChatLeftBar;