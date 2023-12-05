import React from 'react';
import Counter from './counter';
import * as S from './home.styled';
import Main from './main';
import PaymentPlan from './paymentPlan';
import Services from './services';

const Home:React.FC = () => {
  
  return (
    <S.HomeContainer >
      <Main/>
      <Counter/>
      <Services/>
      <PaymentPlan/>
    </S.HomeContainer>
  );
}

export default Home;