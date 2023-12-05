import React from 'react';
import * as S from './chatHeader.styled';

const ChatHeader:React.FC = () => {
  
  return (
    <S.Container>
      <S.ButtonGroup>
        <S.StyledButton>AI Knowledge Base</S.StyledButton>
        <S.StyledButton>Personal documents</S.StyledButton>
        <S.StyledButton>Work documents</S.StyledButton>
      </S.ButtonGroup>
      <S.StyledLink>Add new documents block</S.StyledLink>
      </S.Container>  
  );
}

export default ChatHeader;