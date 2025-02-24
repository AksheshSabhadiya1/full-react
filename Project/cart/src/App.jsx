import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import ViewCart from './pages/ViewCart'

function App() {

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/view-cart',
      element: <ViewCart />
    }
  ]

}])

const queryClient = new QueryClient()

return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
    </RouterProvider>
  </QueryClientProvider>
)

}


export default App
