import React from 'react'
import "../Css/Navibar.css"
function Navibar() {
    return (
        <div className="navbar">
        <h2>logoname</h2>
        <div className="leftSide">
          <div className="linkLeft">
            <a href="/">Home</a>
            <a href="/">Notifications</a>
          </div>
        </div>
        <div className="middle">
          <input type="text" placeholder="Search"></input>
          <button>search</button>
        </div>
        <div className="rightSide">
          <div className="linkRight">
            <a href="/">Profile</a>
            <a href="/"><button >Create</button></a>
            <a href="/">Settings</a>
          </div>
        </div>
      </div>
    )
}

export default Navibar
