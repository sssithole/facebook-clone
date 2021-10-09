import React from 'react'
import './Feed.css';
import Story from './Story.js'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed() {
    return (
        <div className="feed">
            {/* story Row */}
            <StoryReel/>
            {/* Message Sender */}
            <MessageSender />
        </div>
    )
}

export default Feed
