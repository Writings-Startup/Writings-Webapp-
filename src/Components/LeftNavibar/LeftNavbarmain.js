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
import { Link } from 'react-router-dom';

{/*left navi bar for homepage,createpage,notificationpage,profilepage*/}
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
                         startIcon={<RssFeedOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Feed</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         
                         startIcon={<GroupWorkOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/magazine" style={{textDecoration: 'none', color: 'black' }}>Magazine</Link></Button><br/>


                        <Button
                         className={classes.btn}
                         
                         startIcon={<WhatshotOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/booming" style={{textDecoration: 'none', color: 'black' }}>Booming</Link></Button><br/>

                        
                        <Button
                         className={classes.btn}
                         
                         startIcon={<LocalLibraryOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/readlist" style={{textDecoration: 'none', color: 'black' }}>Readlist</Link></Button><br/>

                        <Button
                         className={classes.btn}
                         
                         startIcon={<ChromeReaderModeOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/guide" style={{textDecoration: 'none', color: 'black' }}>Guide</Link></Button><br/>


                        <Button
                         className={classes.btn}
                        
                         startIcon={<EventOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/events" style={{textDecoration: 'none', color: 'black'  }}>Events</Link></Button><br/>

                        

        




                </Container>


                


                   

                </div>

            </div>
            
        
    )
}

export default LeftNavbarmain
