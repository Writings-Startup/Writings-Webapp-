import React,{useState} from 'react'
import './feeds.css'

function Feeds() {

    return (

    <div className="ccards">
        <div className="cards__item">
            <div className="card">
                <img className="feed-pic" src="Assets/images/Group 369.jpg" alt="feed-pic" ></img>
                    <div class="mcard">
                        <div class="profile-show">
                            <img className="profile-pic" src="/Assets/profile/image 10.jpg" alt="profile-pic" ></img>
                            <p className="profile-name"> Andy William</p>
                        </div>
                        <h3 className="title">Learning From The Sea</h3>
                        <p className="body-w">53K views  •  2 weeks ago</p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Feeds
