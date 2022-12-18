import React from 'react'

function featurebox(props) {
    return (
        <div className='feature'>
            <div className='FeatureHead'>
                <h3>{props.title}</h3>
            </div>
            <div className='Fimage'>
                <img src={props.singleimage} alt='features'></img>
            </div>
            
        </div>
    )
}

export default featurebox
