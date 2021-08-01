import React from 'react'
import Feeds from '../Components/Feeds/Feeds'
import LeftNavbarmain from '../Components/LeftNavibar/LeftNavbarmain'
import "../Css/Home.css"


function Home() {
    return (
        
        <div className="home-main">
            
            <LeftNavbarmain/>
           
        <div className="feedss">

            <Feeds/>
        </div>
            
        </div>

       
    )
}

export default Home
