import React from 'react'
import "../Css/Profile.css"
import ProfilePage from '../Components/ProfilePage'
import LeftNavbarprofile from '../Components/LeftNavibar/LeftNavbarprofile'
function Profile() {
    return (
        <div>
       
          <LeftNavbarprofile/>
            <ProfilePage/>

        </div>
    )
}

export default Profile
