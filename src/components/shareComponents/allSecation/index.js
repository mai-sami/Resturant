import React from 'react'
 
function Index({ title, name, desc, image,children,Style,styleTitle,styleName,styleDec,styleSecation}) {
    return (
        <div className='about'>
            <div className={Style} >
                <p className={styleTitle}>{title}</p>
                <p className={styleName}>{name}</p>
                <p className={styleDec}>
                    {desc}
                </p>
                {children}
            </div>
            <div className={styleSecation}>
                <img src={image} alt="logo" />
            </div>
        </div>
    )
}

export default Index
