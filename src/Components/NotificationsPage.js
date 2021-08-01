import React from 'react'
import"../Css/Notifications.css"


function NotificationsPage() {
    return (
        <div className="Notifi-body">
            <div className="contents">
                <div className="box1">
                    <img src="./Assets/profile/image 13.jpg" alt="" className="dp"/>
                    <p className="name">Wijaya Abadi</p>
                    <p className="txt1">@wijaya_abadi</p>
                    <p className="txt2">•    1 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">liked your writting</p>
                    <p className="txt4">Soldier Of The Sun</p>
                    </div>
                </div>
                <div className="box2">
                    <i class="fas fa-exclamation-triangle" id="icon"></i>
                    <p className="name">Logo Name</p>
                    <p className="txt1">Change your Password</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">please reset your account password</p>
                    </div>    
                </div>
                <div className="box3">
                    <img src="./Assets/profile/image 13.jpg" alt="" className="dp"/>
                    <p className="name">Wijaya Abadi</p>
                    <p className="txt1">@wijaya_abadi</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">commented on your writting</p>
                    <p className="txt4">Soldier Of The Sun</p>
                    </div>
                    <div className="action2">
                    <p className="txt3">"🔥 I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security."</p>
                    </div>
                </div>
                <div className="box2">
                    <img src="./Assets/profile/image 11.jpg" alt="" className="dp"/>
                    <p className="name">Budi Hakim</p>
                    <p className="txt1">@budi_h</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">started following you</p>
                    </div>    
                </div>
                <div className="box2">
                    <img src="./Assets/profile/june.jpg" alt="" className="dp"/>
                    <p className="name">June</p>
                    <p className="txt1">@its_me_june</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">started following you</p>
                    </div>    
                </div>
                <div className="box3">
                    <img src="./Assets/profile/siriusblack.jpg" alt="" className="dp"/>
                    <p className="name">Sirius Black</p>
                    <p className="txt1">@sirius_blackie</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">commented on your writting</p>
                    <p className="txt4">Earth got Wings</p>
                    </div>
                    <div className="action2">
                    <p className="txt3">"Really enjoyed reading your book...keep up the good work 👍"</p>
                    </div>
                </div>
                <div className="box3">
                    <img src="./Assets/profile/image 10.jpg" alt="" className="dp"/>
                    <p className="name">Andy William</p>
                    <p className="txt1">@andy_william</p>
                    <p className="txt2">•    2 weeks ago</p>
                    <div className="action1">
                    <p className="txt3">commented on your writting</p>
                    <p className="txt4">Earth got Wings</p>
                    </div>
                    <div className="action2">
                    <p className="txt3">"Very interesting topic, Geart imagination 👌"</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default NotificationsPage

