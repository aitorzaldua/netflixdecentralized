import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';


//React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <MoralisProvider appId="xxxxx" serverUrl="xxxxx">
    <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotificationProvider>
  </MoralisProvider>


);

