import { Navigate } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <Navigate to='/login'/>
        },
        {
            path: '/login',
            element: < Login/>
        },
        {
            path: '/register',
            element: < Register/>
        },
        {
          path: '/home',
          element: < Home/>
        }
    ]
  }
]

export default routes