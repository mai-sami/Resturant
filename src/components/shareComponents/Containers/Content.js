import React from 'react'
import './index.css'
function Content({children}) {
    return (
        <div className='content'>
            {children}
        </div>
    )
}

export default Content
