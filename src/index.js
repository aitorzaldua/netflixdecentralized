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

  <MoralisProvider appId="0iRwPzoqum8zGC9GCbZPDP2rJvZ1tBCkYQwl8vfl" serverUrl="https://ytloyiwqs4ap.usemoralis.com:2053/server">
    <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotificationProvider>
  </MoralisProvider>


);

