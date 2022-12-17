import React from 'react'
import logo from '../../assets/Group 27.png'
import './header.css'
import { Link } from 'react-scroll'

function Header() {
    return (

        <header className='header'>
            <img className='logo__header' src={logo} alt='logo' />

            <ul className='header__ul'>
                <li>
                  <a className='item' href='/'>Home</a>
                </li>
                <li>
                    <Link to="about">
                        <a className='item' href='/'> About Us</a>

                    </Link>
                </li>
                <li>
                    <Link to="special">
                        <a className='item' href='/'>Special</a>
                    </Link>
                </li>
                <li>
                    <Link to="Menu">
                        <a className='item' href='/'>Menu</a>
                    </Link>
                </li>
                <li>
                    <Link to="Blogs">
                        <a className='item' href='/'>Blogs</a>
                    </Link>
                </li>
                <li>
                    <i class="fa-solid fa-magnifying-glass icons"></i>
                </li>
            </ul>

            <div className='right__div' >
                <hr />
                <button className='Book'>Book Now

                </button>
                <hr />
            </div>
        </header>

    )
}

export default Header
