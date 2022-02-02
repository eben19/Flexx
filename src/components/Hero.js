import React from 'react';
import Header from './Header';



const Hero = () => {

    return(
        <div style={{
            width:"100%",
            height:"350px",
            backgroundColor:"blue",
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center",
        }}>
           
           <div style={{display:"flex", color:"white", fontFamily:"monospace"}}>
           <h1 style={{}}>The perfect lightweight theme for your next project.</h1> 
           </div>
        </div>
    )
}

export default Hero