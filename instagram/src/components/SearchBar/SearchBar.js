import React from 'react';
import './SearchBar.css';
import igLogo from '../../img/ig-icon.png';
import igNameLogo from '../../img/ig-name-logo.png';
import compass from '../../img/compass-icon.png';
import heart from '../../img/heart-ig.svg';
import person from '../../img/person-icon.png';

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-logo">
                <img src={igLogo} alt="ig-icon" className="ig-icon" height='25'/>
                <img src={igNameLogo} alt="ig-logo" className="ig-logo" height='25'/>
            </div>
            <input type="text" placeholder='&#x26B2; Search'/>
            <div className="search-icons">
                <img src={compass} alt="compass" height='25'/>
                <img src={heart} alt="heart" height='25'/>
                <img src={person} alt="person" height='25'/>
            </div>
        </div>
    )
}

export default SearchBar;