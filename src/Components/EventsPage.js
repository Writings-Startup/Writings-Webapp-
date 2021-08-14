import React from 'react'
import "../Css/EventsPage.css"

function EventsPage() {
    return (
        <div className="page-E">
            
            <div className="even">
                <p className="title-E">Current Events</p>
           
            <div className="boxone">
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <img className="imgone-E" src="/Assets/images/event1 (3).jpg" alt="" ></img>
                            </td>
                            <td>
                                <p className="ht-E">The act of writing</p>
                                <p className="ct-E"> participate in the larger writing community.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            

            </div>
            
            </div>
            <div className="divtwo">
                <p className="titletwo">Literary Festival</p>
            <div className="boxtwo">
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <img className="imgtwo-E" src="/Assets/images/event1 (1).jpg" alt="" ></img>

                            </td>
                            <td>
                                <p className="ctwo-E">“A literary festival usually features a variety of presentations and readings by authors, as well as other events, delivered over a period of several days, with the primary objectives of promoting the authors' books and fostering a love of literature and writing.”</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            </div>
            <div className="divthree">
            <p className="titletwo">upcoming Events</p>
            <div className="boxthree">
            <img className="imgthree-E" src="/Assets/images/event1 (2).jpg" alt="" ></img>
            <p className="titlethree">Writing Conferences</p>
            <p className="cthree-E">Here are 60 writing conventions to check out in the coming week.</p>


            </div>
            </div>
        </div>
    )
}

export default EventsPage
