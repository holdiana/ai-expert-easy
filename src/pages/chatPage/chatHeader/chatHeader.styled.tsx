import { Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  width: 100%;
  padding: 130px 20px 28px 35px;
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    padding: 80px 0 18px 0;
  }
`;
export const ButtonGroup = styled('div')`
  display: flex;
`;
export const StyledButton = styled(Button)`
  width: 272px;
  padding: 20px 0px;
  background-color: rgba(229, 231, 235, 1);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 12px;
  margin: 0 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  text-transform: capitalize;
  color: rgba(75, 85, 99, 1);
  @media (max-width: 750px) {
    padding: 10px 0px;
    max-width: 200px;
  }
`;
export const StyledLink = styled(Link)`
  margin-left: 10%;
  padding: 6px 20px;
  height: 35px;
  color:rgba(75, 85, 99, 1);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
