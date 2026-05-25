import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SocialProvider } from './SocialContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocialProvider> {/* Context sağlayıcısı ile sarmalayın */}
      <App />
    </SocialProvider>
  </React.StrictMode>
);

