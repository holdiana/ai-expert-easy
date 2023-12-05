import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  width: 900px;
  height: 100%;
  & nav {
    padding-top: 30px ;
    background-color: #000000;
    @media (max-width: 750px) {
      padding-top: 0px ;
  }
  }
`;

export const Logo = styled(Typography)`
flex-grow: 1;
line-height: 18px;
    & span {
        color: #6030FF;
    }
`
export const StyledBtn = styled(Button)`
text-transform: capitalize;
border-radius: 90px;
font-size: 14.63px;
line-height: 18px;
color: #ffffff;
padding: 18px 30px;
&:hover{
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 90px;
}
`