
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { About, Contact, Home, HomeLayOut, Service } from './pages'

function App() {
  
const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayOut />,
    children: [

      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
])
  return (
    <RouterProvider router={router} />
  )
}

export default App
