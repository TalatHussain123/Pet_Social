import React from 'react'
import Featurebox from './featurebox';
import image1 from '../images/Group2.png';
import image2 from '../images/Group3.png';
import image3 from '../images/Group4.png';

function feature() {
    return (
        <div className='feature_Section'>
            <div className='title'>
                <h2>Feature</h2>

            </div>
            <div className='featurebox'>
                <Featurebox  singleimage={image1} title='Live Walk'/>
                <Featurebox  singleimage={image2} title='Pets Profile'/>
                <Featurebox  singleimage={image3} title='Owner Profile'/>
            </div>
            
        </div>
    )
}

export default feature
