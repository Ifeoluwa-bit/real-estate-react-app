import {useState} from 'react'
import './Navbar.css'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import {Link} from 'react-scroll'

export default function Navbar() {

    const[click, setClick] = useState(false)
    const handleClick = ()=> {setClick(!click)}

  return (
    <div name='home' className='navbar'>
        <div className="container">

            <h1><span><BsFillHouseFill />Real</span>Estate</h1>
            <button className="btn">Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Search</li></Link>
                <Link to='about' smooth={true} duration={500}><li>About</li></Link>
                <Link to='contact' smooth={true} duration={500}><li>Contact</li></Link>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt2 className='icon'/>)}
            </div>
        </div>
    </div>
  )
}
