// Core
import React, { lazy } from 'react';
import { Routes as Router, Route } from 'react-router';

// Styled
import { Routes } from './routes';

// Pages
const Home = lazy(() => import('../pages/home'));
const ChatPage = lazy(() => import('../pages/chatPage'));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={<Home/>} />
    <Route path={Routes.chat} element={<ChatPage/>} />
  </Router>
);