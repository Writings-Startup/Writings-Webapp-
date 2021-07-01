import React from 'react'
import LeftNavibar from "../Components/LeftNavibar"
import { Row } from 'react-bootstrap'
import Navibar from "../Components/Navibar"
import Newsfeed from "../Components/Newsfeed"
import "../Css/Home.css"
function Home() {
    return (
        <Row>
        <Navibar></Navibar>
        <LeftNavibar></LeftNavibar>
        <Newsfeed></Newsfeed>
        </Row>
    )
}

export default Home
