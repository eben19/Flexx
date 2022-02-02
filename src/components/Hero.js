import React from 'react';
import Header from './Header';
import Back from './Image/girl.jpg'


const Hero = () => {

    return(
        <div style={{
            width:"100%",
            height:"400px",
            backgroundColor:"yellow",
        }}>
            <img src={Back} style={{width:"100%", height:"100%", }}/>
        
        </div>
    )
}

export default Hero