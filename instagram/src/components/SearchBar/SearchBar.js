import React from 'react';
import './SearchBar.css';
import IGLogo from '../../img/ig-icon.png';
import IGNameLogo from '../../img/ig-name-logo.png';

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-logo">
                <img src={IGLogo} alt="ig-icon" className="ig-icon" height='25'/>
                <img src={IGNameLogo} alt="ig-logo" className="ig-logo" height='25'/>
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