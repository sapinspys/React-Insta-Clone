import React from 'react';
import './SearchBar.css';
import igLogo from '../../img/ig-icon.png';
import igNameLogo from '../../img/ig-name-logo.png';
import compass from '../../img/compass-icon.png';
import heart from '../../img/heart-icon.png';
import person from '../../img/person-icon.png';

function SearchBar(props) {
    return (
        <div className="search-container">
            <div className="search-logo">
                <img src={igLogo} alt="ig-icon" className="ig-icon" height='30'/>
                <img src={igNameLogo} alt="ig-logo" className="ig-logo" height='30'/>
            </div>
            <form onSubmit={props.searchSubmit}>
                <input type="text" onChange={props.searchChange} placeholder='&#x26B2; Search'/>
            </form>
            <div className="search-icons">
                <img src={compass} alt="compass" height='30'/>
                <img src={heart} alt="heart" height='30'/>
                <img src={person} alt="person" height='30'/>
            </div>
        </div>
    )
}

export default SearchBar;