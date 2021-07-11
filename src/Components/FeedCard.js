import React from 'react'
import "../Css/FeedCard.css"

function FeedCard() {
    return (
        <div className="card">
            <div className="img">
            <img src="../images/unnamed.jpg" alt="Avatar"></img>
            </div>
            
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default FeedCard
