import React from 'react'
import LeftNavibar from "../Components/LeftNavibar"
import Newsfeed from "../Components/Newsfeed"
import "../Css/Home.css"

function Home() {
    return (
        
        <div className="home-main">
            
            <LeftNavibar/>
            <Newsfeed/>
            
        </div>

       
    )
}

export default Home
