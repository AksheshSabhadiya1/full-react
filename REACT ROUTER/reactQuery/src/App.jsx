import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home'
import FetchOldData from './pages/FetchOldData'
import FetchRQ from './pages/FetchRQ'
import FetchIndiv from './components/UI/FetchIndiv'
import InfiniteScroll from './pages/InfiniteScroll'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [

        {
          path: '/',
          element: <Home />
        },

        {
          path: '/fetchOldData',
          element: <FetchOldData />
        },

        {
          path: '/fetchRQ',
          element: <FetchRQ />
        },

        {
          path: 'fetchRQ/:id',
          element: <FetchIndiv />
        },

        {
          path: 'infinite-scrolling',
          element: <InfiniteScroll />
        }
      ]
    }
  ])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
