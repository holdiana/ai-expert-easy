import React from 'react';
import { Global as GlobalStyles, css } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from './app.styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import ChatPage from '../pages/chatPage';
import TopBar from '../shared/topBar';
import Footer from '../shared/footer';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#6030FF',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Poppins',
      fontSize: '64px',
      fontWeight: 'bold',
      '@media (max-width:750px)': {
        fontSize: '48px',
      },
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '63.71px',
      fontWeight: '300',
      lineHeight: '64px',
      '@media (max-width:750px)': {
        fontFamily: 'Poppins',
        fontSize: '30px',
      },
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '22.59px',
      fontWeight: '400',
      lineHeight: '28px',
      '@media (max-width:750px)': {
        fontFamily: 'Poppins',
        fontSize: '18px',
      },
    },
    h4: {
      fontFamily: 'Arial',
      fontSize: '55px',
      fontWeight: 'bold',
      '@media (max-width:750px)': {
        fontFamily: 'Arial',
        fontSize: '25px',
      },
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '27.42px',
      fontWeight: 'bold',
      lineHeight: '30px',
      '@media (max-width:750px)': {
        fontFamily: 'Inter',
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    h6: {
      fontFamily: 'Poppins',
      fontSize: '40px',
      fontWeight: 'bold',
      '@media (max-width:750px)': {
        fontFamily: 'Poppins',
        fontSize: '20px',
      },
    },
    body2: {
      fontFamily: 'Poppins',
      color: '#ffffff', 
      fontSize: '14.63px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Inter',
      color: 'rgba(255, 255, 255, 0.7)', 
      fontSize: '16px',
      lineHeight: '24px',
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 500, md: 750, lg: 900, xl: 1200 },
  },
}
);



export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Container>
        <GlobalStyles
          styles={css`
            #root,
            body {
              margin: 0;
              scroll-behavior: smooth;
              overflow-x: hidden;
              scrollbar-width: none;
              -ms-overflow-style: none; /* IE 10+ */
              scrollbar-width: none; /* Firefox */
              &::-webkit-scrollbar {
                /* chrome based */
                width: 0px;
              }
            }
            #root {
              position: relative;
            }
          `}
        />
    <Router>
      <Routes>
        <Route path="/chat" Component={ChatPage} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
    <TopBar/>
    <Footer/>
    </Container>
  </ThemeProvider>
);