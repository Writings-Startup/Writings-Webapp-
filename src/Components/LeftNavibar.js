import React from 'react'
import "../Css/LeftNavibar.css"

function LeftNavibar() {

    return (
        <div className="body" >
        
        <div className="null">
                
        </div>
            <div className="content-box">
                <a href='#' className="link"><i className="fas fa-rss-square"></i><span className="span" >Feed</span></a>
            </div>  
            <div className="content-box">
                <a href='#' className="link"><i class="far fa-list-alt"></i><span className="span" >Read list</span></a>
             </div>  
            <div className="content-box">
            <a href='#' className="link"><i class="far fa-star"></i><span className="span" >Popular</span></a>
                </div>
            <div className="content-box">
            <a href='#' className="link"><i class="far fa-calendar-alt"></i><span className="span" >Events</span></a>
            </div>
            <div className="content-box">
            <a href='#' className="link"><i class="fas fa-fire"></i><span className="span" >Trend</span></a>
            </div>


          </div>
        
    )
}

export default LeftNavibar
