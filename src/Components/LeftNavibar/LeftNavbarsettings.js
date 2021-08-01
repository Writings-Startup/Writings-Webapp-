import React from 'react'
import "./LeftNavbarmain.css"
import {Container }  from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
{/*left navi bar for settingspage*/}


const useStyles = makeStyles({
    btn:{
      textTransform: "none",
      fontSize:23,
      backgroundColor: 'white',
      '&:hover':{
      backgroundColor:"#F4F9C5"
      
           
      }
    }
})


function LeftNavbarsettings() {
    const classes= useStyles()
    return (
        <div className="full-box" >
            <div className="leftnavsetti" >
                <div className="void-area"></div>
                <Container>
                   
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<AccountCircleOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Account</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<VerifiedUserOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Privacy</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<HttpsOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Security</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<NotificationsNoneOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Notification</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<ChromeReaderModeOutlinedIcon style={{ fontSize: 25 }}/>}
                        >Guide</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={< HelpOutlineOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Help</Button><br/>

                        

            













                </Container>




            </div>
            
        </div>
    )
}

export default LeftNavbarsettings
