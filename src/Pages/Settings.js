import React from 'react'
import SettingsAccount from '../Components/SettingsAccount.js'
import LeftNavibar from "../Components/LeftNavibar"


function Settings() {
    return (
        <div>
          <LeftNavibar
             icon1="fa fa-user-o" colone="Account"
             icon2="fa fa-suitcase" coltwo="Privacy"
             icon3="fa fa-unlock-alt" colthree="Security"
             icon4="fa fa-bullhorn" colfour="Notification"
             icon5="fa fa-question" colfive="help"/>
          <SettingsAccount/>
        </div>
    )
}

export default Settings
