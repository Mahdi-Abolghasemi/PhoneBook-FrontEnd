import { Component } from "react";
import validator from "validator";

export class AddOrEdit extends Component {
  constructor(props) {
    super(props);
    if (this.props.mode == "edit") {
      this.state = {
        id: this.props.rowDetails.id,
        firstName: this.props.rowDetails.firstName,
        lastName: this.props.rowDetails.lastName,
        mobile: this.props.rowDetails.mobile,
        homeNumber: this.props.rowDetails.homeNumber,
        workNumber: this.props.rowDetails.workNumber,
        fax: this.props.rowDetails.fax,
        otherNumber: this.props.rowDetails.otherNumber,
        email: this.props.rowDetails.email,
      };
    } else if (this.props.mode == "add") {
      this.state = {
        firstName: "",
        lastName: "",
        mobile: "",
        homeNumber: "",
        workNumber: "",
        fax: "",
        otherNumber: "",
        email: "",
      };
    }

    this.rules = {
      firstName: { required: true },
      lastName: { required: true },
      email: { required: false, email: true },
    };
  }

  changeData = (e) => {
    switch (e.target.name) {
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "mobile":
        this.setState({ mobile: e.target.value });
        break;
      case "homeNumber":
        this.setState({ homeNumber: e.target.value });
        break;
      case "workNumber":
        this.setState({ workNumber: e.target.value });
        break;
      case "fax":
        this.setState({ fax: e.target.value });
        break;
      case "otherNumber":
        this.setState({ otherNumber: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
    }
  };

  checkValidation = () => {
    let error = 0;

    Object.keys(this.rules).forEach((field) => {
      if (this.rules[field].required && validator.isEmpty(this.state[field])) {
        error++;
      }
      if (
        this.rules[field].email &&
        !validator.isEmpty(this.state[field]) &&
        !validator.isEmail(this.state[field])
      )
        error++;
    });
    if (error === 0) this.props.saveCallBack(this.state);
  };

  render() {
    return (
      <div className="bodyContact">
        <div className="formContact">
          <div className="text-center h4 p-2">{this.props.title} Contact</div>
          <hr />
          <form className="d-flex row row-cols-2 was-validated">
            <div className="position-relative form-group col">
              <label>First Name:</label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.changeData}
                placeholder="Enter First Name"
                aria-label="First Name"
                required
              />
              <div className="invalid-tooltip">Please fill out this field.</div>
            </div>
            <div className="position-relative form-group col">
              <label>Last Name:</label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.changeData}
                placeholder="Enter Last Name"
                aria-label="Last Name"
                required
              />
              <div className="invalid-tooltip">Please fill out this field.</div>
            </div>
            <div className="form-group col">
              <label>Mobile:</label>
              <input
                className="form-control"
                name="mobile"
                type="number"
                value={this.state.mobile}
                onChange={this.changeData}
                placeholder="Enter Mobile"
                aria-label="Mobile"
              />
            </div>
            <div className="form-group col">
              <label>Home Number:</label>
              <input
                className="form-control"
                name="homeNumber"
                type="number"
                value={this.state.homeNumber}
                onChange={this.changeData}
                placeholder="Enter Home Number"
                aria-label="Home Number"
              />
            </div>
            <div className="form-group col">
              <label>Work Number:</label>
              <input
                className="form-control"
                name="workNumber"
                type="number"
                value={this.state.workNumber}
                onChange={this.changeData}
                placeholder="Enter Work Number"
                aria-label="Work Number"
              />
            </div>
            <div className="form-group col">
              <label>Fax:</label>
              <input
                className="form-control"
                name="fax"
                type="number"
                value={this.state.fax}
                onChange={this.changeData}
                placeholder="Enter Fax"
                aria-label="Fax"
              />
            </div>
            <div className="form-group col">
              <label>Other Number:</label>
              <input
                className="form-control"
                name="otherNumber"
                type="number"
                value={this.state.otherNumber}
                onChange={this.changeData}
                placeholder="Enter Other Number"
                aria-label="Other Number"
              />
            </div>
            <div className="position-relative form-group col col-md-12">
              <label>Email:</label>
              <input
                className="form-control"
                name="email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={this.state.email}
                onChange={this.changeData}
                placeholder="Enter Email"
                aria-label="Email"
              />
              <div className="invalid-tooltip">
                "Please enter a valid email address."
              </div>
            </div>
          </form>
          <div className="form-group text-center m-1">
            <button
              class="btn btn-primary m-1"
              name="save"
              aria-label="Save"
              onClick={this.checkValidation}
            >
              Save
            </button>
            <button
              class="btn btn-secondary m-1"
              name="cancel"
              aria-label="Cancel"
              onClick={this.props.cancelCallBack}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
