import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router';
import appRouter from './routing/appRouter.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router = {appRouter} />
  // </StrictMode>
)
