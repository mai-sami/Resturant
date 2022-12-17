import React from 'react'
import Content from '../shareComponents/Containers/Content'
import SpecialText from '../shareComponents/TitleSeaction'
import './index.css'
import logoFirst from '../../assets/restaurant 1.png'
import logoSecand from '../../assets/chef 2.png'
import logoThired from '../../assets/orange-juice (1) 1.png'
var DataCard = [
    { title: "skilled Chef", name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.", image: logoFirst },
    { title: "skilled Chef", name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.", image: logoSecand }
    , { title: "skilled Chef", name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.", image: logoThired }

]
function Index() {
    return (
        <Content>
      <div className='special' id='special'>
        <SpecialText title={"Special"} subTitle={"What makes us special"}/>
        <div className='card__content'>
                {DataCard.map((item) => (
                    <div className='card__specail'>
                        <img className='image__card' src={item.image} />
                        <p className='title_card'>{item.title}</p>
                        <p className='name__card'>{item.name}</p>
                    </div>
                ))}
            </div>
            </div>
        </Content>
   
    )
}

export default Index
