import React from 'react'
import SpecialText from '../shareComponents/TitleSeaction'
import './index.css'
import logo from '../../assets/DirtCandy-0242 (1).png'
   
import image4 from '../../assets/unsplash_ThLVnKdeH1k (2).png'
 import image6 from '../../assets/unsplash_sHG1dCUXgPY.png'
import image7 from '../../assets/unsplash_50KffXbjIOg (1).png'
import image8 from '../../assets/hcmp33562_1459402 (1).png'
import imageend from '../../assets/hcmp76303_1094626.png'

 
import ContainerSection from '../shareComponents/Containers/ContainerSection'
var DataCard=[
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: logo ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image8 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: imageend ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image7 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image8 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image4 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image4 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image8 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image6 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image7 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: image8 ,price:332},
    { title: "Lorem ipsum dolor sit amet", name: "Lorem ipsum dolor sit amet", image: imageend ,price:332},

]
function Index() {
    return (
        <div className='Menu'>
            <ContainerSection> 
            <SpecialText title={"Straight From Kitchen"} subTitle={"Our Menu"} />
            <div className='card__grid'>
            {DataCard.map((item) => (

                <div className='card__item'>
                    <img src={item.image}  alt="logo"/>
                    <div className='card__text'>
                        <p className='names'>{item.title}</p>
                        <p className='sub__names'>{item.name}</p>
                    </div>
                  
                    <div className='line'></div> 
                    <p className='price'>Rs {item.price}</p>

                </div>
             ))}

            </div>
            
            </ContainerSection>
        </div>
    )
}

export default Index
