import React from 'react'
import ChannelsList from "../components/ChannelList";
const Channels = () => {
    return (
        <div>
            <h1>Active channels</h1>
            <p>These are the verified channels (integrity > 50), if you find out it is no longer active or the image quality is poor, give it a thumbs down or suggest an optional url to that channel (you must be logged in).</p>
            <ChannelsList />
        </div>
    )
}

export default Channels;