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

            {/* <i className="fas fa-rss-square "></i> <span className="content  d-none d-sm-block" >Feeds</span>
            <AiOutlineRead size= "30px" ><h4 className="content d-none d-sm-block">Read List</h4></AiOutlineRead>
            <a href='#' className="content"><i class="fas fa-rss-square"></i><h4 className="d-none d-sm-block">Popular</h4></a>
            <h4 className="content"><AiOutlineFire size= "30px" />Trend</h4>
            <h4 className="content"><MdEvent size= "30px" />Events</h4> */}


          </div>
        
    )
}

export default LeftNavibar
