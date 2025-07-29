
import { NavLink } from 'react-router-dom'
import arr from '../assets/image/arr-removebg-preview.png'

const NavBar = () => {
  return (
    <div className=' flex justify-between m-0'>
        <div className=' w-40'>
            <img src={arr} alt="Ar-rahman sooto automobile"/>
        </div>
        <ul className='flex gap-9 mt-14'>
            <li>
            <NavLink className='text-blue-700 text-xl capitalize' to={"/"}>home</NavLink>
            </li>
            <li>
            <NavLink className='text-blue-700 text-xl capitalize' to={"about"}>about</NavLink>
            </li>
            <li>
            <NavLink className='text-blue-700 text-xl capitalize' to={"service"}>services</NavLink>
            </li>
            <li>
                <NavLink className='text-blue-700 text-xl capitalize' to={"contact"}>contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar