import React from 'react'
import logo from '../../assets/Group 27.png'
import './header.css'
function Header() {
    return (

        <header className='header'>
            <img className='logo__header' src={logo} alt='logo' />

            <ul className='header__ul'>
                <li>
                    <a className='item' href='/'>Home</a>
                </li>
                <li>
                    <a className='item' href='/'> About Us</a>
                </li>
                <li>
                    <a className='item' href='/'>Special</a>
                </li>
                <li>
                    <a className='item' href='/'>Menu</a>
                </li>
                <li>
                    <a className='item' href='/'>Blogs</a>
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
