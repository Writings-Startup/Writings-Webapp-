import React from 'react'
import { Link } from 'react-router-dom';
import './CreateBtn.css'; 


function CreateBtn() {
    return (
        <div>
            <Link to='/create'>
                <button className='Createbtn'>Create</button>
            </Link>
        </div>
    )
}

export default CreateBtn
