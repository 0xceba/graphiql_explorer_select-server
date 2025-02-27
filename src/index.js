import './index.css';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Create a root container for the React application
const root = createRoot(document.getElementById('root'));

// Render the React application into the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);