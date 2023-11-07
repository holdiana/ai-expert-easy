import React from 'react';
import { Global as GlobalStyles, css } from '@emotion/react';
import { Container } from './app.styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AppRoutes } from './appRoutes';
import Home from '../pages/home/home';
import ChatPage from '../pages/chatPage';



export const App: React.FunctionComponent = () => (
  <>
        {/* <AppRoutes /> */}
    <Container>
      {/* <AppRoutes/> */}
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
        {/* <p>
          Hallo world!!!!.
        </p> */}
    <Router>
      <Routes>
        <Route path="/chat" Component={ChatPage} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
    </Container>
  </>
);