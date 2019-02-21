import React from 'react';
import igLogo from '../../img/ig-header-logo.png';
import compass from '../../img/compass-icon.png';
import heart from '../../img/heart-icon.png';
import person from '../../img/person-icon.png';
import styled from 'styled-components';

function SearchBar(props) {
    return (
        <Header>
            <LogoHeader className="search-logo">
                <img src={igLogo} alt="ig-logo"/>
            </LogoHeader>
            <form onSubmit={props.searchSubmit}>
                <FormInput type="text" 
                value={props.text} 
                onChange={props.searchChange} 
                placeholder='&#x26B2; Search'/>
            </form>
            <div className="search-icons">
                <img src={compass} alt="compass" height='30'/>
                <img src={heart} alt="heart" height='30'/>
                <img src={person} alt="person" height='30'/>
            </div>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    position: fixed;
    background: white;
    border-bottom: 1px solid #E0E0E0;
`;

const LogoHeader = styled.div`
    margin-left: 20px;
`;

const FormInput = styled.input`
    background: #F8F8F8;
    border: 1px solid #E0E0E0;
    font-size: 0.8rem;
    padding: 2px 35px;
    text-align: center;
    font-size: 0.9rem;
`;


export default SearchBar;