import { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
    };
  }

  setValues = (event) => {
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "mobile":
        this.setState({ mobile: event.target.value });
        break;
    }
  };

  render() {
    return (
      <div className="container-fluid p-4">
        <form className="d-flex">
          <div className="form-group m-2">
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              onChange={this.setValues}
              type="text"
              placeholder="Enter Name"
              aria-label="Name"
            />
          </div>
          <div className="form-group m-2">
            <label>Mobile:</label>
            <input
              className="form-control"
              name="mobile"
              onChange={this.setValues}
              type="number"
              placeholder="Enter Number"
              aria-label="Mobile"
            />
          </div>
        </form>
        <div className="form-group m-2">
          <button
            className="btn btn-outline-primary"
            aria-label="Search"
            onClick={() => this.props.searchCallBack(this.state)}
          >
            Search
          </button>
        </div>
        <hr />
      </div>
    );
  }
}
