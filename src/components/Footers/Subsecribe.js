import React from 'react'
import Button from '../shareComponents/BUTTON/Button'
import './footer.css'
import chat from '../../assets/Vector (1).png'
import ContainerSection from '../shareComponents/Containers/ContainerSection'
function Subsecribe() {
    return (
        <ContainerSection>

        <div className='subsecribe'>
         <div className='left__footer'>
            <img src={chat} alt="chat"/>
<p className='text__subsec'>Subscribe to our Newsletter</p>
         </div>
         <div className='subsecribe__midel'>
            <input className='subsecribe__input'  placeholder='Your Email id'/>
         </div>
         <Button name={"Subscribe"}/>
        </div>
        </ContainerSection>

    )
}

export default Subsecribe
