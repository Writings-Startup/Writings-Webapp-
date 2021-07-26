import React from 'react'
import CreatePage from '../Components/CreatePage'
import LeftNavibar from '../Components/LeftNavibar'

function Create() {
    return (
        <div>
             <LeftNavibar
             icon1="fa fa-rss" colone="Feeds"
             icon2="fa fa-users" coltwo="magazine"
             icon3="fa fa-free-code-camp" colthree="Booming"
             icon4="fa fa-book" colfour="Guide"
             icon5="fa fa-flag-checkered" colfive="Events"/>
            <CreatePage/>
        </div>
    )
}

export default Create
