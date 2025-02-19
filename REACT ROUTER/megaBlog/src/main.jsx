import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {Home, AuthLayout, Allpost, Post, Addpost, Editpost } from './components/index.js'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },

      {
        path: '/login',
        element: (
          <AuthLayout authentication={false} >
            <Login />
          </AuthLayout>
        )
      },

      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },

      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <Allpost />
          </AuthLayout>
        )
      },

      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <Addpost />
          </AuthLayout>
        )
      },

      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <Editpost />
          </AuthLayout>
        )
      },

      {
        path: '/post/:slug',
        element: <Post />
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>
)
