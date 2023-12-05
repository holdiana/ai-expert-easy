import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  background-color: rgba(217, 217, 217, 1);
  width: 35%;
  height: 100%;
`;
export const LeftBarHeader= styled('div')`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
export const ChatLogo = styled('div')`
  margin-right: 20px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;
export const NewChat = styled(Button)`
  width: 84px;
  height: 29px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 8px;
  text-transform: capitalize;
`;