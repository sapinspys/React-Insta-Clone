import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-logo">
                <img src="img/ig-icon.png" alt="ig-icon" />
                Instagram
            </div>
            <input type="text" placeholder='Search'/>
            <div className="search-icons">
                <img src="img/compass-icon.png" alt="compass"/>
                <img src="img/heart-icon.png" alt="heart"/>
                <img src="img/person-icon.png" alt="person"/>
            </div>
        </div>
    )
}

export default SearchBar;