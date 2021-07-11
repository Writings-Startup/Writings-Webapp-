import React from 'react'
import './Searchbar.css'

function Searchbar() {
    return (
        <div>
            <form className="search">
                <input className="search-box" type="text" placeholder="Search here"></input>
            </form>
        </div>
    )
}

export default Searchbar
