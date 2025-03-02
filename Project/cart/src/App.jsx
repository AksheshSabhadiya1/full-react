import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import { ViewCart } from './pages/ViewCart'
import Cart from './pages/Cart'
import { ProductProvider } from './pages/ProductContext'
import { Header } from './components/Header/Header'
import Card from './pages/Card'


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
    },

    {
      path: '/cart',
      element: <Cart />
    }
  ]

}])

const queryClient = new QueryClient()

return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
    <ProductProvider>
            <Header />
            <Card />
        </ProductProvider>
    </RouterProvider>
  </QueryClientProvider>
)

}


export default App
