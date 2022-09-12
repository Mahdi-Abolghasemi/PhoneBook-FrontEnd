import react, { Component } from "react";

export class ImportTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container-fluid">
          <table className="table table-sm table-striped table-bordered">
            <thead>
              <tr>
                <th
                  colSpan="9"
                  className="bg-success text-white text-center h4 p-2"
                >
                  Importans
                </th>
              </tr>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Home Number</th>
                <th>Work Number</th>
                <th>Fax</th>
                <th>Other Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dataModel.map((items) => (
                <tr>
                  <td>{items.firstName}</td>
                  <td>{items.lastName}</td>
                  <td>{items.mobile}</td>
                  <td>{items.homeNumber}</td>
                  <td>{items.workNumber}</td>
                  <td>{items.fax}</td>
                  <td>{items.otherNumber}</td>
                  <td>{items.email}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger m-1"
                      onClick={() => this.props.deleteImportCallBack(items.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          <button
            className="btn btn-primary m-1"
            aria-label="Back"
            onClick={this.props.backCallBack}
          >
            Back
          </button>
        </div>
      </section>
    );
  }
}
