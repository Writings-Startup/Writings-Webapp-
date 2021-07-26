import React from 'react'
import Feeds from '../Components/Feeds/Feeds'
import LeftNavibar from "../Components/LeftNavibar"
import "../Css/Home.css"


function Home() {
    return (
        
        <div className="home-main">
            
            <LeftNavibar
             icon1="fa fa-rss" colone="Feeds"
             icon2="fa fa-users" coltwo="magazine"
             icon3="fa fa-free-code-camp" colthree="Booming"
             icon4="fa fa-book" colfour="Guide"
             icon5="fa fa-flag-checkered" colfive="Events"/>
           
        <div className="feedss">

            <Feeds/>
        </div>
            
        </div>

       
    )
}

export default Home
