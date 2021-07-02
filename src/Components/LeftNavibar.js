import React from 'react'
import "../Css/LeftNavibar.css"
import { IconContext } from 'react-icons';
import { MdRssFeed, MdEvent } from "react-icons/md";
import { AiOutlineRead, AiOutlineFire } from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
function LeftNavibar() {
    return (
        <div className="body">
        
        <div className="null">
                
        </div>
            <div className="content-box">

                

                
                <h4 className="content"> <MdRssFeed size= "30px" /> Feeds</h4>
            </div>  
            <div className="content-box">
                <h4 className="content"><AiOutlineRead size= "30px" />Read List</h4>
            </div>  
            <div className="content-box">
                <h4 className="content"><GiAlliedStar size= "30px" />Popular</h4>
            </div>
            <div className="content-box">
                 <h4 className="content"><AiOutlineFire size= "30px" />Trend</h4>
            </div>
            <div className="content-box">
                 <h4 className="content"><MdEvent size= "30px" />Events</h4>
            </div>
        

          </div>
        
    )
}

export default LeftNavibar
