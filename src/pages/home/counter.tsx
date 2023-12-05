import React from 'react';
import * as S from './home.styled';

const Counter:React.FC = () => {

  return (
    <S.CounterContainer >
        <S.HelpItems>
            <S.ListItem>
              <S.Count>300K</S.Count>
              <S.CountDescription>Question Asked</S.CountDescription>
            </S.ListItem>
            <S.ListItem>
              <S.Count>100M+</S.Count>
              <S.CountDescription>Worldwide Views</S.CountDescription>
              </S.ListItem>
            <S.ListItem>
              <S.Count>80+</S.Count>
              <S.CountDescription>Languages</S.CountDescription>
            </S.ListItem>
        </S.HelpItems>
    </S.CounterContainer>
  );
}

export default Counter;