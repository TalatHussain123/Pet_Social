import React from 'react'
import featureimg from '../images/Scroll Group1.png'

function header() {
    return (
        <div id='main'>
            <div className='name'>
                <img src={featureimg} alt='feature'></img>
            </div>
        </div>
    )
}

export default header
