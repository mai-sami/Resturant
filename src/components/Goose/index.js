import React from 'react'
import Button from '../shareComponents/BUTTON/Button'
import ContainerSection from '../shareComponents/Containers/ContainerSection'
import logo from '../../assets/Rectangle 34.png'
import AllSecations from '../shareComponents/allSecation'

function Index() {
    return (
        <>
           <ContainerSection>
            <AllSecations
                title={"Cooking ingredients"}
                name={"What goes in"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque"}
                image={logo}
                Style={"right__secationGoes"}
                styleTitle={"about__title"}
                styleName={"sub__name"}
                styleDec={"text__Goes"}
                styleSecation={"styleSecationGoes"}

                >
                <div className='read__seaction'>
                <Button name={"Read more"} />
                </div>
            </AllSecations>



        </ContainerSection>
        </>
    )
}

export default Index
