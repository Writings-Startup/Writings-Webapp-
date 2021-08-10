import React,{useState} from 'react'
import"../Css/Profile.css"
import LoyaltyIcon from '@material-ui/icons/Loyalty';


function ProfilePage() {
    const [user,setUser] = useState({name:"Thomas Shellby",userid:"arthurblack", profilepic:"./Assets/profile/Profile Picture2.jpg"})
    return (
        <div className="profile-body">
            <div className="userDetails">
            <img src={user.profilepic} className="photo"></img>
                <p className="Pname">{user.name}</p>
                <p className="Uid">@{user.userid}</p>
                <p className="bio">Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</p>
                <button className="editprofile-btn">Edit Profile</button>
            </div>
            <div className="badge">
                <LoyaltyIcon style={{ fontSize: 170, color: "#880E4F"}} />
            </div>
            <div className="btn-bar">
                <a href="" className="links">Writtings</a>
                <p className="writtings-count">100</p>
                <a href="" className="links">Followers</a>
                <p className="followers-count">120</p>
                <a href="" className="links">Following</a>
                <p className="following-count">99</p>
                <a href="" className="links">Tags</a>
                <p className="tag-count">5</p>
            </div>
            <div className="writtings-list">
                <div className="writtings-box">
                    <img src="./Assets/images/Rectangle 2.jpg" alt="" className="coverpic" />
                    <p className="category">NATURE</p>
                    <p className="heading">Soldier Of The Sun</p>
                    <p className="date">November 3, 2012</p>
                    <p className="content">Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.</p>
                </div>
                <div className="writtings-box">
                    <img src="./Assets/images/Rectangle 3.jpg" alt="" className="coverpic" />
                    <p className="category">PLANTS</p>
                    <p className="heading">Occaecat Anim eu Qui</p>
                    <p className="date">November 3, 2012</p>
                    <p className="content">Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.</p>
                </div>
                <div className="writtings-box">
                    <img src="./Assets/images/Rectangle 4.jpg" alt="" className="coverpic" />
                    <p className="category">FOOD</p>
                    <p className="heading">Fugiat Incididunt Volutate</p>
                    <p className="date">November 3, 2012</p>
                    <p className="content">Ea qui dolor aute cupdatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.</p>
                </div>
                <div className="writtings-box">
                    <img src="./Assets/images/readlist8.jpg" alt="" className="coverpic" />
                    <p className="category">NATURE</p>
                    <p className="heading">Cupidatat Ad Pariatur</p>
                    <p className="date">November 3, 2012</p>
                    <p className="content">Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.</p>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage