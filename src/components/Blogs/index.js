import React from 'react'
import Contenters from '../shareComponents/Containers/Contenters'
import SpecialText from '../shareComponents/TitleSeaction'
import './index.css'
import logo from '../../assets/food.png'
import last from '../../assets/last.png'
import first from '../../assets/first.png'
import CardEndSeaction from '../shareComponents/CardEndSeactions/CardEndSeaction'
function Index() {
    return (
        <Contenters>
            <div className='blogs' id='Blogs'>
                <SpecialText title={"Blogs"} subTitle={"words from our food lovers"} />
                <div className='all__card__blog'>
                <CardEndSeaction title={"Cooking Dining Experience"} name={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "} image={last} role={true}/>
                <CardEndSeaction title={"Cooking Dining Experience"} name={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "} image={logo} role={false}/>
                <CardEndSeaction title={"Cooking Dining Experience"} name={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "} image={first} role={true}/>

                </div>
            </div>
        </Contenters>

    )
}

export default Index
