import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-p8wdz6ks5z7x3yxg.us.auth0.com"
    clientId="YdSxaGzlNGEoyTUMO4NaY4z5nJf31Gi0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
