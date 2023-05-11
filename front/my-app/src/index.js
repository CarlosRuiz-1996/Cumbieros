import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AuthProvider from './pages/Auth/AuthProvider';
//import AuthProvider from './Auth/AuthProvider';
import './css/taildwind.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider>
    <Routes />
  </AuthProvider>
  </React.StrictMode>
);