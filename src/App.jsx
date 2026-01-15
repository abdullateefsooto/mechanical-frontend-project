
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { About, Contact, Home, HomeLayOut, Service } from './pages'
import BookingForm from './components/BookingForm';


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
      {
        path: "book", 
        element: <BookingForm /> 
      },
    ]
  }
])
  return (
    <RouterProvider router={router} />
  )
}

export default App
