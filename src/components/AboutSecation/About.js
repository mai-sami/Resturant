import React from 'react'
import './about.css'
import logo from '../../assets/Untitled design (6) 1.png'
import ContainerSection from '../shareComponents/Containers/ContainerSection'
import Button from '../shareComponents/BUTTON/Button'
import AllSecations from '../shareComponents/allSecation'
function About() {
    return (
        <div id='about'>

       
        <ContainerSection >
            <AllSecations
                title={"About Us"}
                styleTitle={"about__title"}
                styleName={"sub__name"}
                styleDec={"text__"}
                name={"Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"}
                desc={"Lorem ipsum dolor sit amet,  hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque"}
                image={logo}
                Style={"right__secation"}
                styleSecation={"left__secation"}
            >
                <div className='read__seaction'>
                    <Button name={"Read more"} />
                </div>
            </AllSecations>
           


        </ContainerSection>
        </div>
    )
}

export default About
