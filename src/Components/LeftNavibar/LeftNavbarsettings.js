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
import { Link } from 'react-router-dom';
{/*left navi bar for settingspage*/}


const useStyles = makeStyles({
    btn:{
      textTransform: "none",
      fontSize:14,
      backgroundColor: 'white',
      '&:hover':{
      backgroundColor:"#F4F9C5",
      color:"black"
      
           
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
                         
                         startIcon={<AccountCircleOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to="/accountsettings"> Account</Link></Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<VerifiedUserOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Privacy</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<HttpsOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Security</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<NotificationsNoneOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Notification</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<ChromeReaderModeOutlinedIcon style={{ fontSize: 18 }}/>}
                        >Guide</Button><br/>

                        <Button
                         className={classes.btn}
                         
                         startIcon={< HelpOutlineOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to="/help">Help</Link></Button><br/>
             
                </Container>


            </div>
            
        </div>
    )
}

export default LeftNavbarsettings
