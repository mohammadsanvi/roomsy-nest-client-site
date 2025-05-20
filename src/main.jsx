import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
} from "react-router";
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './Components/Context/ThemeContext.jsx';
import { RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ThemeProvider>
      <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
     </ThemeProvider>
//  </HelmetProvider>
)
