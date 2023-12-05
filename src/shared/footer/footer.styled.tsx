import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterContainer = styled('div')`
  width: 100vw;
  height: 100%;
  padding: 44px 20px;
  background-color: black;
  @media (max-width: 750px) {
    text-align: center;
    padding: 24px 20px;
  }

`;
export const Wrapper = styled(Grid)`
  max-width: 1504px;
  margin: 0px auto;
  align-items: center;
`;
export const LogoBlock = styled(Grid)`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;
// export const LogoIcon = styled('span')`
//  padding: 12px;
//  display: inline-block;
//  max-width: 60px;
//  height: 60px;
//  background-color: white;
//  color: red;
//  font-family: 'Poppins';
//  font-size: 12px;
//  font-weight: 700;
//  line-height: 12px;
//  text-align: center;
//  margin-right: 5px;
// `
export const Logo = styled(Typography)`
  flex-grow: 1;
  line-height: 18px;
    & span {
        color: #6030FF;
    }
`
export const SocialBlock = styled(Grid)`
padding-bottom: 40px;
& button {
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 50px;
}
& svg {
  color: white;
  width: 23px;
  height: 23px;
}
@media (max-width: 750px) {
    text-align: center;
    padding-bottom: 0px;
  }
 
`;
export const PrivacyPolicy = styled(Button)`
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  text-transform: capitalize;
  color: white;
`;
export const TermsBlock = styled(Grid)`
text-align: center;
`;
export const Copywriting = styled('p')`
 font-family: 'Inter';
 font-size: 15px;
 font-weight: 400;
 line-height: 30px;
 letter-spacing: 0em;
 text-align: left;
 color: rgba(255, 255, 255, 0.5);
 @media (max-width: 750px) {
    text-align: center;
  }
`;
export const Terms = styled(Button)`
 font-family: 'Inter';
 font-size: 15px;
 font-weight: 400;
 line-height: 30px;
 text-transform: capitalize;
 color: white;
`;