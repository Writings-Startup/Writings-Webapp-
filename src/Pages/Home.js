import React from 'react'
import Navibar from '../Components/Navibar'
import LeftNavibar from "../Components/LeftNavibar"
import Newsfeed from "../Components/Newsfeed"
import "../Css/Home.css"

function Home() {
    return (
        
        <div>
            <Navibar/>
            <LeftNavibar/>
            <Newsfeed/>
        </div>

       
    )
}

export default Home
