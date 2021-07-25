import React from 'react'
import "../Css/LeftNavibar.css"

function LeftNavibar(props) {

    return (
        <div className="full-box" >
        
        <div className="leftnavsetti" >
        <div className="void"></div>
            <div className="matter-inside">
            <p1 href='#' className="icon-s"><i class={props.icon1} ></i><span className="matter" >{props.colone}</span></p1>
            </div>  
            <div className="matter-inside">
            <p2 href='#' className="icon-s"><i class={props.icon2} ></i><span className="matter" >{props.coltwo}</span></p2>
             </div>  
            <div className="matter-inside">
            <p3 href='#' className="icon-s"><i  class={props.icon3} aria-hidden="true"></i><span className="matter" >{props.colthree}</span></p3>
                </div>
            <div className="matter-inside">
            <p4 href='#' className="icon-s"><i class={props.icon4} aria-hidden="true"></i><span className="matter" >{props.colfour}</span></p4>
            </div>
            <div className="matter-inside">
            <p5 href='#' className="icon-s"><i class={props.icon5} aria-hidden="true"></i><span className="matter" >{props.colfive}</span></p5>
            </div>
          </div>

          </div>
        
    )
}

export default LeftNavibar
