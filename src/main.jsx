import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
} from "react-router";
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './Components/Context/ThemeContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
        <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
      </AuthProvider>
     </ThemeProvider>
  </HelmetProvider>
)
