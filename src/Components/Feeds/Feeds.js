import React,{useState} from 'react'
import './feeds.css'

function Feeds() {
    const [blog,setBlog] = useState([
        {title: "Learning From The Sea" ,body:"53K views  •  2 weeks ago" ,author:" Andy William" , feedpic:"/Assets/images/Group 369.jpg", profilepic:"/Assets/profile/image 10.jpg",id:1},
        {title: "Ethics is nothing else than reverence for life " ,body:"5K views  •  3 weeks ago" ,author:"Johny Wise" ,feedpic:"/Assets/images/image 7.jpg",profilepic:"/Assets/profile/image 12.jpg", id:2},
        {title: "Blacksmiths with Determination " ,body:"3K views  •  4 weeks ago" ,author:"Budi Hakim" ,feedpic:"/Assets/images/image 6.jpg",profilepic:"/Assets/profile/image 11.jpg", id:3},
        {title: "what's meant to be will always find a way" ,body:"503K views  •  5 weeks ago" ,author:" Wijaya Abadi" ,feedpic:"/Assets/images/image 19.jpg",profilepic:"/Assets/profile/image 13.jpg", id:4},
        {title: "Tempor deserunt Sunt Qui" ,body:"503K views  •  November 3, 2014" ,author:" Sirius Black" ,feedpic:"/Assets/images/Rectangle 2.jpg",profilepic:"/Assets/profile/siriusblack.jpg", id:5},
        {title: " Tara Sparling’s" ,body:"503K views  •  December 3, 2014" ,author:" Emily Brown" ,feedpic:"/Assets/images/nothumbnail.jpg",profilepic:"/Assets/profile/emilybrown.jpg", id:6},
        {title: "Bay City Tribune" ,body:"503K views  •  January 3, 2013" ,author:" June" ,feedpic:"/Assets/images/nothumbnail.jpg",profilepic:"/Assets/profile/june.jpg", id:7},
        {title: "Jak-Jaw Racing" ,body:"503K views  •  November 3, 2013" ,author:" Angelina Jolie" ,feedpic:"/Assets/images/nothumbnail.jpg",profilepic:"/Assets/profile/angelinajolie.jpg", id:8}
    ]);

    return(

    <div className="ccards">
            {blog.map((blog)=>(
                <div className="cards__item">
                    <div className="card" key={blog.id}>
                    <img className="feed-pic" src={blog.feedpic} alt="feed-pic" ></img>
                        <div class="mcard">
                            <div class="profile-show">
                                <img className="profile-pic" src={blog.profilepic} alt="profile-pic" ></img>
                                <p className="profile-name"> {blog.author} </p>
                            </div>
                            <h3 className="title">{blog.title}</h3>
                            <p className="body-w">{blog.body}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default Feeds
