import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const HomeLayOut = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayOut