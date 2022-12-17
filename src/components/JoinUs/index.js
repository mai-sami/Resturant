import React from 'react'
import Button from '../shareComponents/BUTTON/Button'
import './index.css'
import imageSideFirst from '../../assets/Component 5.png'
import imageSide from '../../assets/Component 4.png'
import Content from '../shareComponents/Containers/Content'
function Index() {
    return (
        <Content> 
        <div className='join'>
        <div className='join-us'>
            <img src={imageSideFirst} alt ="imageSideFirst"/>
            <div className='join__moddel'>
                <p className='join__name'>Come join us for a lunch
                    <br/>
                     this weekend and enjoy</p>
                 
                <p className='join__price'>FLAT 10% OFF</p>
                <Button name={"Book Table"}/>
            </div>
            <img src={imageSide} alt="imageSide" />
        </div>
        </div>
        </Content>
    )
}

export default Index
