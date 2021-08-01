import {Container }  from '@material-ui/core'
import React from 'react'
import "./LeftNavbarmain.css"
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';

{/*left navi bar for homepage,createpage,notificationpage,profilepage*/}
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

function LeftNavbarmain() {
    const classes= useStyles()
    return (
        <div className="full-box" >
            <div className="leftnavsetti" >
                <div className="void-area"></div>
                <Container>
                   
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<RssFeedOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Feed</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<GroupWorkOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Magazine</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<WhatshotOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Booming</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<LocalLibraryOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Readlist</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<ChromeReaderModeOutlinedIcon style={{ fontSize: 25 }}/>}
                        >Guide</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<EventOutlinedIcon style={{ fontSize: 25 }}/>}
                         >Events</Button><br/>

                        

            













                </Container>




            </div>
            
        </div>
    )
}

export default LeftNavbarmain
