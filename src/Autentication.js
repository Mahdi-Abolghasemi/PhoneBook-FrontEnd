import { Component } from "react";
import validator from "validator";
import { DataLog } from "./Data";

export class Autentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      dataLog: [...DataLog],
      message: "",
    };
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case "userName":
        this.setState({ userName: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
    }
  };

  handleLogin = async () => {
    if (
      !validator.isEmpty(this.state.userName) &&
      !validator.isEmpty(this.state.password)
    ) {
      const encoder = new TextEncoder();
      const dataPass = encoder.encode(this.state.password);
      const hashPass = await crypto.subtle.digest("SHA-256", dataPass);
      const hashArray = Array.from(new Uint8Array(hashPass));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      if (
        this.state.userName.toLowerCase() === this.state.dataLog[0].userName &&
        hashHex === this.state.dataLog[0].password
      ) {
        this.props.loginCallBack(true);
      } else {
        this.setState({ message: "User Name or Password is not Correct." });
        this.props.loginCallBack(false);
      }
    }
  };

  render() {
    return (
      <div className="bodyAutentication">
        <div className="formAutentication">
          <div className="formAutentication_h2">
            <h2 className="text-center">Login</h2>
          </div>
          <form className="was-validated">
            <div className="position-relative form-group mb-4">
              <input
                className="form-control"
                type="text"
                name="userName"
                aria-label="UserName"
                placeholder="Enter UserName"
                onChange={this.handleChange}
                required
              />
              <div className="invalid-tooltip">Please fill out this field.</div>
            </div>
            <div className="position-relative form-group mb-4">
              <input
                className="form-control"
                type="password"
                name="password"
                aria-label="Password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                required
              />
              <div className="invalid-tooltip">Please fill out this field.</div>
            </div>
          </form>
          <div className="mb-4">
            <button
              className="form-control btn btn-primary"
              aria-label="Log in"
              onClick={this.handleLogin}
            >
              Log In
            </button>
          </div>
          <div>
            <p className="badge bg-danger">{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}
