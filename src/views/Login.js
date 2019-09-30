import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: "",
        valid: false,
        message: ""
      }
    };
  }

  validate = form => {
    form.valid = form.username != "" && form.password != "";
    this.setState({ form });
  };

  handleChange = e => {
    let form = { ...this.state.form };
    form[e.target.name] = e.target.value;
    this.setState({ form });
    this.validate(form);
  };

  handleSubmit = e => {
    e.preventDefault();
    let form = { ...this.state.form };
    console.log(form);
    axios.post("http://127.0.0.1:3333/login", form).then(response => {
      if (response.data.name) {
        console.log(response.data.name);
        this.props.history.push("/channels");
      } else {
        form.message = response.data;
        this.setState({ form });
      }
    });
  };

  render() {
    return (
      <div>
        Bem-vindo !
        <div>
          <form>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              onClick={this.handleSubmit}
              disabled={!this.state.form.valid}
            >
              Log in
            </button>

            <span>{this.state.form.message}</span>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
