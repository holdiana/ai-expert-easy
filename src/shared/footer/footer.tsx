import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as S from './footer.styled';
import { Grid } from '@mui/material';


const Footer:React.FC = () => {

  return (
    <S.FooterContainer sx={{ display: 'flex' }}>
        <S.Wrapper container spacing={2}>
            <S.LogoBlock item md={8}  sx={{ display: { xs: 'none', md: 'block' } }}>
               {/* <S.LogoIcon >Logo Here Soon</S.LogoIcon> */}
               <S.Logo variant="h6">
                   <span>AI</span>ExpertEasy
                </S.Logo>
            </S.LogoBlock>
            <S.SocialBlock item xs={12} md={4}>
               <IconButton><InstagramIcon/></IconButton>
               <IconButton><FacebookIcon/></IconButton>
               <IconButton><TwitterIcon/></IconButton>
               <IconButton><YouTubeIcon/></IconButton>
               <IconButton><LinkedInIcon/></IconButton>
            </S.SocialBlock>
            <Grid item xs={12} md={8} order={{ xs: 4, md: 3 }}>
               <S.Copywriting>2023 © AIExpertEasy. All rights Reserved.</S.Copywriting>
            </Grid>
            <S.TermsBlock item xs={12} md={4} order={{ xs: 3, md: 4 }} >
               <S.PrivacyPolicy>Privacy Policy</S.PrivacyPolicy>
               <S.Terms>Terms & Conditions</S.Terms>
            </S.TermsBlock> 
      </S.Wrapper>
    </S.FooterContainer>
  );
}
export default Footer;