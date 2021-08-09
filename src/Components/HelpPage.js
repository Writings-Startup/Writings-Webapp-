import React from 'react'
import"../Css/Help.css"
function HelpPage() {
    return (
        <div className="help-main">
            
            <div className="help-feed">
                   <div className="help-feeds">
                       <img className="help-image" src="/Assets/images/account setti.png" alt="mainpic" ></img>
                   </div>  
                           <div className="help-tag">                  
                           <p className="help-ac" >Account Settings</p>
                           <p className="help-ds">Adjust settings, manage notification, learn about name changes and more.</p>
                           </div>
          </div>

          <div className="help-feed">
                   <div className="help-feeds">
                       <img className="help-image" src="/Assets/images/password.png" alt="mainpic" ></img>
                   </div>  
                           <div className="help-tag">                  
                           <p className="help-ac" >Login & Password</p>
                           <p className="help-ds">Fix login issue and learn how to change or reset your Password.</p>
                           </div>
        
          </div>

          <div className="help-feed">
                   <div className="help-feeds">
                       <img className="help-image" src="/Assets/images/lock.png" alt="mainpic" ></img>
                   </div>  
                           <div className="help-tag">                  
                           <p className="help-ac" >Privacy & Security</p>
                           <p className="help-ds">Control who can see what you share and give protection to your account</p>
                           </div>
          </div>

          {/* <div className="help-feed">
                   <div className="help-feeds">
                       <img className="help-image" src="/Assets/images/account setti.png" alt="mainpic" ></img>
                   </div>  
                           <div className="help-tag">                  
                           <p className="help-mz" >Magazine</p>
                           <p className="help-ds">Learn how to use,create and manage a magazine </p>
                           </div> */}
          {/* </div> */}
        </div>
    )
}

export default HelpPage
