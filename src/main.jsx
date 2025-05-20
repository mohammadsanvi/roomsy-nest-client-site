import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './Components/Context/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ThemeProvider>
      <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
     </ThemeProvider>
 </HelmetProvider>
)
