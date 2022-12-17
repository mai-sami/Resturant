import React from 'react'
import About from '../components/AboutSecation/About'
import Blogs from '../components/Blogs'
import Copyright from '../components/Footers/Copyright'
import Footer from '../components/Footers/Footer'
import Subsecribe from '../components/Footers/Subsecribe'
import Goose from '../components/Goose'
import Header from '../components/Header/Header'
import Introduaction from '../components/Introduaction'
import JoinUs from '../components/JoinUs'
import Menu from '../components/Menu'
import Reviews from '../components/Reviews'
import Content from '../components/shareComponents/Containers/Content'
import SpecialSecation from '../components/SpecialSecation'
import Statistics from '../components/Statistics'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <Content>
                <div className='introducation'>
                    <Header />
                    <Introduaction />
                </div>
            </Content>
            <About />

            <SpecialSecation />
            <Menu />
            <JoinUs />
            <Goose />
            <Statistics />
               <Reviews />
          <Blogs />
             <Footer />
           <Subsecribe/> 
            <Copyright />
        </div>
    )
}

export default Home
