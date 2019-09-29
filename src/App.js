import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const { data: users } = await axios.get('http://127.0.0.1:3333/users');
    this.setState({ users });
  }

  render() {
    return (
      <Users users={this.state.users} />
    );
  }


}

export default App;
