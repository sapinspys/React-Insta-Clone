import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-logo">
                <img src="../../img/camera-ig.svg" alt="ig-icon"/>
                <img src="../../img/ig-name-logo.png" alt="ig-logo"/>
            </div>
            <input type="text" placeholder='Search'/>
            <div className="search-icons">
                <img src="../../img/compass-icon.png" alt="compass"/>
                <img src="../../img/heart-ig.png" alt="heart"/>
                <img src="../../img/person-icon.png" alt="person"/>
            </div>
        </div>
    )
}

export default SearchBar;