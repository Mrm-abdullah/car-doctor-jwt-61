import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProviders>
        {/* <App /> */}
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
