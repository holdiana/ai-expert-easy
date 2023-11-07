import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';


const Root: React.FC = () => (
  <React.StrictMode>
      <App />      
  </React.StrictMode>
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('#root')!).render(<Root />);
