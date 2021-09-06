import { Avatar } from '@material-ui/core';
import React from 'react'
import './Story.css';

function Story({image, profileScr, title}) {
    return (
        <div style={{backgroundImage: `url{${image}}`}} className='story'>
            <Avatar scr={profileScr}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
