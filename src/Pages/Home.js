import React from 'react'
import LeftsideBox from "../Components/LeftsideBox"
import Navibar from "../Components/Navibar"
import Newsfeed from "../Components/Newsfeed"
import "../Css/Home.css"
function Home() {
    return (
        <div>
        <Navibar></Navibar>
        <LeftsideBox></LeftsideBox>
        <Newsfeed></Newsfeed>
        </div>
    )
}

export default Home
