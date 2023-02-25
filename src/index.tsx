import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RefsProvider } from './refContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RefsProvider>
      <App />
    </RefsProvider>
  </React.StrictMode>
);
