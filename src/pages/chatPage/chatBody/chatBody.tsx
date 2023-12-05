import React from 'react';
import * as S from './chatBody.styled';
import ChatLeftBar from '../chatLeftBar';
import ChatRightBar from '../chatRightBar';
import {IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBody:React.FC = () => {
  
  return (
    <S.Container >
      <ChatLeftBar/>
      <S.ChatBodyWrapper>
        <S.ChatBodyButtons>
            <S.BodyBtn>Write an email from bullet list</S.BodyBtn>
            <S.BodyBtn>Code a snake game</S.BodyBtn>
            <S.BodyBtn>Assist in a task</S.BodyBtn>
        </S.ChatBodyButtons>
        <S.ChatInput fullWidth variant="standard" sx={{ ml: 1, flex: 1 }}
        placeholder="Search..." > 
         </S.ChatInput>
         <IconButton type="button" sx={{ p: '10px' }}>
            <SendIcon />
         </IconButton>
      </S.ChatBodyWrapper>
      <ChatRightBar/>
    </S.Container>
  );
}

export default ChatBody;