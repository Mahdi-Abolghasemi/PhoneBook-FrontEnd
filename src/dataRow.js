import { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export class DataRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delete = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteCallBack(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  render() {
    let item = this.props.row;
    return (
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.mobile}</td>
        <td>{item.homeNumber}</td>
        <td>{item.workNumber}</td>
        <td>{item.fax}</td>
        <td>{item.otherNumber}</td>
        <td>{item.email}</td>
        <td>
          <button
            className="btn btn-sm btn-warning m-1"
            onClick={() => this.props.editCallBack(item)}
          >
            Edit
          </button>
          <button
            className="delete button btn btn-sm btn-danger m-1"
            onClick={() => this.delete(item.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-sm btn-success m-1"
            onClick={() => this.props.importCallBack(item)}
          >
            Import
          </button>
        </td>
      </tr>
    );
  }
}
