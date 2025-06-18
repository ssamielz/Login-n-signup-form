import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from './routes.jsx'

const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)

