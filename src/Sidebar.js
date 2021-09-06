import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import PeopleIcon from '@material-ui/icons/People';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png' title='ssithole'/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID_19 Informoation Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Page"/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title="Messager"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
