import React from "react"

import "./Travel.css"


    
    const Travel = ({ destination, country, photo, distance }) => { 
        return <div>
           <div> {destination} </div>
           <div>{country}  </div> 
            <div> <img src={photo}/> </div> 
          <div> {distance} </div>  
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
             </div>
    }


export default Travel


