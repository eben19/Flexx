import React from 'react';

const Header = () => {

    return(
        <div style={{height:"80px", width:"100%", backgroundColor:"green", color:"black", display:"flex", justifyContent:"space-between", alignItems:"center", fontFamily:"monospace"}}>

            <div style={{fontSize:"30px", color:"white", fontWeight:"bold", marginLeft:"15px", color:"turquoise"}}>LOGO</div>
            <div style={{width:"500px", display:"flex", justifyContent:"space-around", fontSize:"20px", marginRight:"15px"}}>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Home</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>About Us</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Contact</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Prices</a>
            </div>
    
        </div>
    )
}

export default Header