import React from 'react'
import Content from '../shareComponents/Containers/Content'
import logo from '../../assets/Group 27.png'
import chat from '../../assets/Vector.png'
import location from '../../assets/Vectors.png'
import phone from '../../assets/Vectorsss (1).png'

function Footer() {
    return (
        <Content>

            <footer className='footer'>

                <div className='first__ul'>
                    <div className='footer_logo'>
                        <img src={logo} />
                        <p className='text__logo'>Golden View Dine </p>
                    </div>
                    <p className='dec__footer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                    </p>
                    <div className='socails'>
                        <div className='socail__icons'>
                        <i class="fa-brands fa-youtube icons__Foter"></i>
                        </div>

                        <div className='socail__icons'>
                        <i class="fa-brands fa-twitter icons__Foter"></i>
                        </div> <div className='socail__icons'>
                        <i class="fa-brands fa-instagram icons__Foter"></i>
                        </div>
                    </div>

                </div>
                <div className='middel__ul'>
                    <h2 className='textUls'>Other Links</h2>

                    <ul className='middel__ulULS'>
                        <li>
                            <a className='item__footer' href='/'>Privacy Policy</a>
                        </li>
                        <li>
                            <a className='item__footer' href='/'>Terms & conditions</a>
                        </li>
                        <li>
                            <a className='item__footer' href='/'>Blogs</a>
                        </li>
                        <li>
                            <a className='item__footer' href='/'>our team</a>
                        </li>
                        <li>
                            <a className='item__footer' href='/'>Our kitchen</a>
                        </li>
                    </ul>
                </div>
                <div className='last__ul'>
                    <h2 className='textUls'>Contact Us</h2>
                    <div className='content_endULs'>
                        <div className='endULs'>
                            <img src={chat} />

                            <p className='endULsText'>Gogreendineservice@gmail.com</p>
                        </div>
                        <div className='endULs'>
                            <img src={location} />

                            <p className='endULsText'>Gogreendineservice@gmail.com</p>
                        </div>
                        <div className='endULs'>
                            <img src={phone} />

                            <p className='endULsText'>Gogreendineservice@gmail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Content>

    )
}

export default Footer
