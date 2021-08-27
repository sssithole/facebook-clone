import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                src="https://svg-clipart.com/svg/blue/0tW1EhF-blue-c-vector.svg"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle"></div>
            <div className="header___right"></div>
        </div>
    )
}

export default Header
