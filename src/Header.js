import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefromOutlinedIcon from "@material-ui/icons/StoreOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefromOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header___right">
                <div className="header__info">
                    < Avatar />
                    <h4>SSithole</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
