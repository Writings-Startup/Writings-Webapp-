import React from 'react'
import Feeds from '../Components/Feeds/Feeds'
import LeftNavibar from "../Components/LeftNavibar"
import "../Css/Home.css"

function Home() {
    return (
        
        <div className="home-main">
            
           <LeftNavibar/>
        <div className="feedss">

            <Feeds/>
        </div>
            
        </div>

       
    )
}

export default Home
