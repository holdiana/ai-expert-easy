import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import StudentsImage from '../../images/students.svg'
import LibrariansImage from '../../images/librarians.svg'
import ResearchersImage from '../../images/researchers.svg'
import * as S from './home.styled';


const Services:React.FC = () => {

  return (
    <S.ServicesContainer>
        <S.ServicesTitle variant='h2'> Our services</S.ServicesTitle>
        <S.CardWrapper>
          <S.StyledCard >
           <CardMedia
             sx={{ height: '100px', width: '100px', mx: 'auto' }}
             image={StudentsImage}
             title="student cap"
            />
           <CardContent sx={{maxWidth: '218px', p: 0}}>
             <S.CardTitle gutterBottom variant="h3">Students</S.CardTitle>
             <Typography variant="body2">
              From the initial research phase to the final paper, Keenious helps you find valuable resources and insights.
            </Typography>
           </CardContent>
           <CardActions sx={{p: 0}}>
              <S.CardButton size="large"  endIcon={<ArrowForwardIcon />}>Learn More</S.CardButton>
          </CardActions>
       </S.StyledCard>
       <S.StyledCard >
           <CardMedia
             sx={{ height: '100px', width: '100px', mx: 'auto' }}
             image={ResearchersImage}
             title="student cap"
            />
           <CardContent sx={{maxWidth: '218px', p: 0}}>
             <S.CardTitle gutterBottom variant="h3">Researchers</S.CardTitle>
             <Typography variant="body2">
               Expand your research process with unique results that are fundamentally different fromtraditional search engines.
            </Typography>
           </CardContent>
           <CardActions sx={{p: 0}}>
              <S.CardButton size="large"  endIcon={<ArrowForwardIcon />}>Learn More</S.CardButton>
          </CardActions>
       </S.StyledCard>
       <S.StyledCard >
           <CardMedia
             sx={{ height: '100px', width: '100px', mx: 'auto' }}
             image={LibrariansImage}
             title="student cap"
            />
           <CardContent sx={{maxWidth: '218px', p: 0}}>
             <S.CardTitle gutterBottom variant="h3">Librarians</S.CardTitle>
             <Typography variant="body2">
              AIExpertEasy providing top-notch recommendations to patrons across various subjects easier and more efficient.
            </Typography>
           </CardContent>
           <CardActions sx={{p: 0}}>
              <S.CardButton size="large"  endIcon={<ArrowForwardIcon />}>Learn More</S.CardButton>
          </CardActions>
       </S.StyledCard>
      </S.CardWrapper>
   </S.ServicesContainer>    
);
}

export default Services;