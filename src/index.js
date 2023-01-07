import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CanvasProvider } from './context/CanvasContext';
import { GlobalStyle } from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CanvasProvider>
      <GlobalStyle />
      <App />
    </CanvasProvider>
  </React.StrictMode>
);
