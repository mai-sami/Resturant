import React from 'react'
import './index.css'
import dish from '../../assets/dish 1.png'
import chef from '../../assets/chef (1) 1.png'
import team from '../../assets/team 1.png'
import ContainerSection from '../shareComponents/Containers/ContainerSection'
import Content from '../shareComponents/Containers/Content'

var DataStatistic = [
    { text: "Delicacy", number: "250+", image: dish },
    { text: "renowed chefs", number: "10+", image: chef },
    { text: "Members", number: "30+", image: team },

]
function Index() {
    return (
        <div className='content__statices'>
            <Content>
                <div className='content__staticesSecand'>
                    {DataStatistic.map((item) => (
                        <div className='statistics'>
                            <img src={item.image} alt={item.image} />
                            <div className='rewirds'>
                                <p className='rewirds__text'>{item.number}</p>
                                <p className='rewirds__Subtext'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </Content>
        </div>

    )
}

export default Index
