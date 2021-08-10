import React from 'react'
import "../Css/ReadList.css"

function ReadListPage() {
    return (
        <div>
           <div className="Create">
               <div className="Top-RL">
                   <p className="Head-RL">This is your readlist.</p>


               </div>
               <div className="Left-RL">
               <input className="submit-RL"  value="Recently read" type="submit" />
               <br/>
               <input className="submit-RL"  value="Create Readlist" type="submit" />
               <br/>
               <input className="submit-RL"  value="Liked writings" type="submit" />

                   

               </div>
               <div className="Mid-RL">
                   <p className="para-1"> My readlist</p>
                   <div>
                   
                   <div className="Item1-RL">
                   <div>

                           <img className="Cards-RL" src="/Assets/images/readlist1.jpg" alt="mainpic" ></img>
                           <p className="para-1" >Morning Motivation</p>
                           <p className="para-2">Donec vel mi eu lorem ornare suscipit.</p>
                           </div>
                           </div>
                          
                           
                          

                           <div className="Item2-RL">
                           <div className="" >
                               
                           <img className="Cards-RL" src="/Assets/images/readlist2.jpg" alt="mainpic" ></img>
                           <p className="para-1" >Drama hit collections.</p>
                           <p className="para-2">Donec vel mi eu lorem ornare suscipit.</p>
                               
                               </div>
                         
                               </div>
                              

                               <div className="Item3-RL">
                           <div >
                               
                           <img className="Cards-RL" src="/Assets/images/readlist3.jpg" alt="mainpic" ></img>
                           <p className="para-1" >Sci-fi Hit Mix</p>
                           <p className="para-2">Donec vel mi eu lorem ornare suscipit.</p>
                               
                               </div>
                         
                               </div>
                               </div>
                               
                            
                               <div className="Item4-RL">
                           <div >
                               
                           <img className="Cards-RL" src="/Assets/images/readlist4.jpg" alt="mainpic" ></img>
                           <p className="para-1" >Women of Hit Mix</p>
                           <p className="para-2">Donec vel mi eu lorem ornare suscipit.</p>
                               
                               </div>
                         
                               </div>
               </div>
               <div className="Right-RL">
               <img className="firstcard-RL" src="/Assets/images/readlist1.jpg" alt="" ></img>
              <div>
                  <table>
                      <tbody>
                          <tr>
                              <td>

                          

                  
               <p className="caption-RL" >Morning Motivation</p>
               </td>
               <td className="but-RL">
              
               <input className="button-RL"  value="Add more" type="submit" />
               </td>
               </tr>
               </tbody>
               </table>
               </div>
               <div className="list-RL">
                   <table>
                       <tbody>
                           <tr>
                               <td className="one-RL">
                                   01
                               </td>
                               <td>
                               <img className="icon-RL" src="/Assets/images/readlist1.jpg" alt="" ></img> 
                               </td>
                               <td >
                                  <p className="ti-RL"> Elevate your Life</p>
                                  
                                  <p className="aut-RL">@andy_william</p>
                                   
                               </td>
                           </tr>
                       </tbody>
                   </table>

               </div>
               <div className="list-RL">
                   <table>
                       <tbody>
                           <tr>
                               <td className="one-RL">
                                   02
                               </td>
                               <td>
                               <img className="icon-RL" src="/Assets/images/readlist5.jpg" alt="" ></img> 
                               </td>
                               <td >
                                  <p className="ti-RL"> An Unexpected Encounter</p>
                                  
                                  <p className="aut-RL">@johny_wise</p>
                                   
                               </td>
                           </tr>
                       </tbody>
                   </table>

               </div>
               <div className="list-RL">
                   <table>
                       <tbody>
                           <tr>
                               <td className="one-RL">
                                   03
                               </td>
                               <td>
                               <img className="icon-RL" src="/Assets/images/readlist6.jpg" alt="" ></img> 
                               </td>
                               <td >
                                  <p className="ti-RL"> Leave the company or else you die </p>
                                  
                                  <p className="aut-RL">@baudy_hakim</p>
                                   
                               </td>
                           </tr>
                       </tbody>
                   </table>

               </div>
               
               <div>
               <div className="list-RL">
                   <table>
                       <tbody>
                           <tr>
                               <td className="one-RL">
                                   04
                               </td>
                               <td>
                               <img className="icon-RL" src="/Assets/images/readlist7.jpg" alt="" ></img> 
                               </td>
                               <td >
                                  <p className="ti-RL"> Morning routine of creation</p>
                                  
                                  <p className="aut-RL">@wijaya_abadi</p>
                                   
                               </td>
                           </tr>
                       </tbody>
                   </table>

               </div>
               </div>   
               <div className="list-RL">
                   <table>
                       <tbody>
                           <tr>
                               <td className="one-RL">
                                   05
                               </td>
                               <td>
                               <img className="icon-RL" src="/Assets/images/readlist8.jpg" alt="" ></img> 
                               </td>
                               <td >
                                  <p className="ti-RL"> Begins in paradise</p>
                                  
                                  <p className="aut-RL">@andy_william</p>
                                   
                               </td>
                           </tr>
                       </tbody>
                   </table>

               </div>







                   
               </div>
</div>

           
         </div>   
        
    )
}

export default ReadListPage
