import React from 'react'
import './index.css'
function CardEndSeaction({ title, name, image, role }) {
    return (
        <>
            <div className={role === true ? "card__blog" : "card__blogReverse"}>
                <img src={image} alt="logo" />
                <div>
                    <div className='all__text'>
                        <p className='cards__title'>{title}</p>
                        <p className='cards__name'>{name}</p>
                    </div>
                    <div className='read__card'>
                        <p className='read__card_text'>
                            Read more
                        </p>
                        <hr className='hr__cards' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardEndSeaction
