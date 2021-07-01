import React from 'react'
import LeftNavibar from "../Components/LeftNavibar"
import Navibar from "../Components/Navibar"
import Newsfeed from "../Components/Newsfeed"
import "../Css/Home.css"
function Home() {
    return (
        <div>
        <Navibar></Navibar>
        <LeftNavibar></LeftNavibar>
        <Newsfeed></Newsfeed>
        </div>
    )
}

export default Home
