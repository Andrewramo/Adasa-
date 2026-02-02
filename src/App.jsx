import { useState } from 'react'

import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import Article from './Components/Article/Article'
import NotFound from './Components/NotFound/NotFound'

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { path: "blog", element: <Blog /> },
      { index: true, element: <Home /> },
      { path: "blog/:id", element: <Article /> },
      { path: "*", element: <NotFound /> }
    ]
  }
])





function App() {


  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
