import React,{useState} from 'react'
import './feeds.css'



function Feeds() {

    return (
        <div className="homeFeed">
            
            <div className="card">
                <img src="/Assets/images/Group 369.jpg" alt="photo placed" className="feedsphoto" ></img>
                <div className="mcard">
                    <div className="pro">
                        <img src="/Assets/images/image 10.jpg" alt="profile" className="profilepic" ></img>
                        <p className="profile-name"> Andy William</p>
                    </div>
                    <h3 className="feedshr">Learning From The Sea</h3>
                     <p className="analytic">53K views  •  2 weeks ago</p>
                </div>
             </div> 
        </div>
    )
}

export default Feeds
