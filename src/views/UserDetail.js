import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    async componentDidMount() {
        const { params } = this.props.match
        const { data } = await axios.get('http://127.0.0.1:3333/users/' + params.id)
        this.setState({ user: data });
    }

    render() {
        let user = this.state.user;
        return (
            <div>
                Name:{user.username}
                Email:{user.email}
                <br />
                <Link to='/users'>Back</Link>
            </div >
        );
    }
}

export default UserDetail;