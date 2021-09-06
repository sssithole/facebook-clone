import React from 'react'
import './Feed.css';
import Story from './Story.js'
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            {/* story Row */}
            <StoryReel/>
            {/* Message Sender */}
        </div>
    )
}

export default Feed
