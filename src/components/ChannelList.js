import React, { Component } from 'react'
import axios from 'axios'
import Channel from './Channel'

class ChannelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        };
    }

    async componentDidMount() {
        const { data: channels } = await axios.get('http://127.0.0.1:3333/channels')
        this.setState({ channels });
    }

    render() {
        let channels = this.state.channels;
        return (
            <div>
                {channels.map((e, i) => <Channel key={i} data={e} />)}
            </div >
        );
    }
}

export default ChannelList;