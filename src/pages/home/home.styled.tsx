import { Button, Card, CardContent, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeContainer = styled('div')`
  width: 100vw;
  margin: 0 auto;
`;
export const Container = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin: 0 auto;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MainTitle = styled(Typography)`
  padding: 50px 0 ;
  text-align: center;
  @media (max-width: 750px) {
    padding: 25px 0 ;
  }
`;
export const MainBtn = styled(Button)`
  text-transform: capitalize;
  padding: 1px 24.5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 90px;
  color: #ffffff;
  font-size: 48px;
  text-transform: capitalize;
  @media (max-width: 750px) {
    font-size: 28px;
  }
  &:hover {
    background-color: #430e88;
  }
`;
export const CounterContainer = styled('div')`
 padding: 32px 0;
 width: 100%;
 background-color: #ffffff;
 display: flex;
`;
export const HelpItems = styled('ul')`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 list-style-type: none;
 padding: 0;
 margin: 0;
`;

export const ListItem = styled('li')`
 margin: 0 10vw;
 background-color: #ffffff;
 color: ${({ theme }) => theme.palette.primary.main};
 text-align: center;
 @media (max-width: 750px) {
   margin: 0 5vw;
  }
`;

export const Count = styled('div')`
font-size: 58.36px;
font-family:'Inter';
line-height: 70px;
font-weight: 700;
@media (max-width: 750px) {
  font-size: 28.36px;
  line-height: 40px;
  }
`;

export const CountDescription = styled('p')`
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: ${({ theme }) => theme.palette.primary.main} ;
padding: 0;
margin: 0;
`;

export const ServicesContainer = styled('div')`
background-color: ${({ theme }) => theme.palette.primary.main} ;
max-width: 100%;
padding: 62px 0;
@media (max-width: 750px) {
  padding: 32px 0;
  }
`;

export const ServicesTitle = styled(Typography)`
  margin: 0 auto; 
  padding-bottom: 32px;
  text-align: center;
`;

export const CardWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 750px) {
    flex-direction: column;
    
  }
`;

export const StyledCard = styled(Card)`
  max-width: 346.66px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 0 3%;
  background-color: ${({ theme }) => theme.palette.secondary.main}; 
  @media (max-width: 750px) {
    margin: 3% 0;
  }
`;

export const CardTitle = styled(Typography)`
  text-align: center;
  color: #ffffff;
  margin: 24px 0 16px 0;
`;

export const CardButton = styled(Button)`
  text-align: center;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14.25px;
  line-height: 18px;
  margin: 36px auto;
  width: 100%;
  color: #ffffff;
  text-transform: capitalize;
  border-radius: 90px;
  border: 1px solid #ffffff;
  & span {
    margin: 0;
  }
`;
export const PaymentContainer = styled('div')`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
justify-content: center;
padding: 100px 0;
@media (max-width: 750px) {
  padding: 50px;
  }
`;

export const PaymentTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0 0 61px 0;
  @media (max-width: 750px) {
    margin: 0 0 31px 0;
  }
`;

export const PaymentCard = styled(Card)`
color: #ffffff;
text-align: left;
border-radius: 25px;
`;
export const PaymentContent = styled(CardContent)`
 background-color:  ${({ theme }) => theme.palette.secondary.main};
 padding: 46px 18px;
`;
export const Price = styled(Typography)`
padding-bottom: 10px;
 & span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 20px;
 }
 @media (max-width: 750px) {
    text-align: center;
  }
`;

export const ContentCancel = styled('div')`
 font-family: 'Inter';
 font-size: 12px;
 font-weight: 400;
 line-height: 16px;
 color: #ffffff;
`;

export const PaymentButton = styled(Button)`
 text-transform: capitalize;
 border: 1px solid #ffffff;
 border-radius: 90px;
 width: 100%;
 background-color: #ffffff;
 margin: 15px 0;
 &:hover{
  color: white;
 }
`;
export const ListScope = styled(List)`
list-style-type: none;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
max-width: 205px;
`;
export const ListScopeItem = styled(ListItem)`
 display: flex;
 width: 100%;
 text-align: left;
 background-color: inherit;
 color: #ffffff;
 
 & svg {
  color: #ffffff;
 }
 & span {
  min-width: 100px;
  max-width: 200px;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 750px) {
    max-width: 300px;
    min-width: 300px;
  }
 }
`;