import React, { Component } from 'react'
import axios from 'axios'
import User from './User'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        const { data } = await axios.get('http://127.0.0.1:3333/users')
        this.setState({ users: data });
    }

    render() {
        let users = this.state.users;
        return (
            <div>
                {users.map((e, i) => <User key={i} data={e} />)}
            </div >
        );
    }
}

export default UserList;