import React from 'react'
import "../Css/Profile.css"
import LeftNavibar from "../Components/LeftNavibar"
import NotificationsPage from '../Components/NotificationsPage'

function Notifications() {
    return (
        <div>
             <LeftNavibar
             icon1="fa fa-rss" colone="Feeds"
             icon2="fa fa-users" coltwo="magazine"
             icon3="fa fa-free-code-camp" colthree="Booming"
             icon4="fa fa-book" colfour="Guide"
             icon5="fa fa-flag-checkered" colfive="Events"/>  
             <NotificationsPage/>
        </div>
    )
}

export default Notifications
