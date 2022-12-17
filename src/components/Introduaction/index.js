import React from 'react'
import Button from '../shareComponents/BUTTON/Button'
import './index.css'
function Index() {
    return (
        <div className='intro'>
            <p className='title FONT'>
                Welcome To
                <br></br>
                Golden View Dine
            </p> 
            <p className='sub__title FONT'> Explore the authentic vegan dishes with your friends and family</p>
       <Button  name={"Read more"}/> 
        </div>
    )
}

export default Index
