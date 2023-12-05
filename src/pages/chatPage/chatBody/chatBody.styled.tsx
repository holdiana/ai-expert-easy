import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  margin: 0 37px;
  display: flex;
  height: 70vh;
`;
export const ChatBodyWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  
`;
export const ChatBodyButtons = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
 
 
`;
export const BodyBtn = styled(Button)`
  width: 272px;
  background-color: rgba(229, 231, 235, 1);
  color: rgba(75, 85, 99, 1);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 12px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  text-transform: capitalize;
  margin-right: 10px;
  &:first-letter {
    text-transform: uppercase;
}
`;
export const ChatInput = styled(TextField)`
 background-color: rgba(243, 244, 246, 1);
 height: 50px;
 border: 1px solid rgba(209, 213, 219, 1);
 border-radius: 12px;
`;