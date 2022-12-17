import React from 'react'
import Contenters from '../shareComponents/Containers/Contenters'
import SpecialText from '../shareComponents/TitleSeaction'
import './index.css'
import avetar from '../../assets/Ellipse 1 (1).png'
import rev from '../../assets/Group 19.png'
import man from '../../assets/Ellipse 1.png'

var DataCard = [
    { title: "Alex andrina", name: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.", image: avetar, srtars: rev },
    { title: "Alex andrina", name: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.", image: avetar, srtars: rev },
    { title: "Alex andrina", name: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.", image: man, srtars: rev },


]
function Index() {
    return (
        <Contenters>
            <div className='reviwes'>
                <SpecialText title={"Reviews"} subTitle={"words from our food lovers"} />
                <div className='contentReviw'>
                    {DataCard.map((item) => (
                        <div className='review__card'>
                            <div className="rev">
                                <img
                                    src={item.image}
                                    alt="reviewsImg"
                                    className="reviewsImg"
                                />
                                <div className='revText'>
                                    <h5 className="nameReviewer">{item.title}</h5>
                                    <img src={item.srtars} alt="starsImg" className="starsImg" />
                                </div>
                            </div>

                            <p className="reviewP">
                                {item.name}
                            </p>


                        </div>
                    ))}

                </div>

            </div>

        </Contenters>
    )
}

export default Index
