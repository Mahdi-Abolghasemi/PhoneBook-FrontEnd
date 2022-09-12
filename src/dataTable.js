import { Component } from "react";
import { DataRow } from "./dataRow";

export class DataTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th
                colSpan="9"
                className="bg-primary text-white text-center h4 p-2"
              >
                Contacts
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
              <DataRow
                row={items}
                deleteCallBack={this.props.deleteCallBack}
                editCallBack={this.props.editCallBack}
                importCallBack={this.props.importCallBack}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
