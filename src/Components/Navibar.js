import React from 'react'
import "../Css/Navibar.css"

function Navibar() {
    return (
      <div className="nav">
      <div className="logo">Logoname</div>
      <form>
        <input type="text" placeholder="Search"></input>
      </form>
      <input type="checkbox" id="click"></input>
      <label for="click" className="menu-btn">
        <i class="fa fa-bars"></i>
      </label>
      <ul >
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Notification</a></li>
        <li><a href="#">Profile</a></li>
        <li><button className="create-btn">Create</button></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
    
    )
}

export default Navibar
