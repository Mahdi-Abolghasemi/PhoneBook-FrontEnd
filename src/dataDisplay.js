import { Component } from "react";
import { Search } from "./search";
import { AddOrEdit } from "./addOrEdit";
import { DataTable } from "./dataTable";
import { ImportTable } from "./ImportTable";
import { Data } from "./Data";

export class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      add: false,
      data: [...Data],
      searchData: [],
      rowDetails: [],
      table: [],
      showTable: false,
    };
  }

  editRow = (row) => {
    this.setState({ edit: true, rowDetails: row });
  };

  addRow = () => {
    this.setState({ add: true });
  };

  cancel = () => {
    this.setState({ add: false, edit: false, showTable: false });
  };

  save = (newData) => {
    if (this.state.add) {
      newData.id = this.state.data.length;
      this.setState({
        add: false,
        edit: false,
        data: this.state.data.concat(newData),
        searchData: this.state.searchData.concat(newData),
      });
    } else {
      this.setState({
        add: false,
        edit: false,
        data: this.state.data.map((oldData) =>
          oldData.id === newData.id ? newData : oldData
        ),
        searchData: this.state.searchData.map((oldData) =>
          oldData.id === newData.id ? newData : oldData
        ),
      });
    }
  };

  search = (model) => {
    this.setState({
      searchData: this.state.data.filter(
        (j) =>
          j.firstName.concat(" ", j.lastName).match(model.name) &&
          j.mobile.match(model.mobile)
      ),
    });
  };

  deleteRow = (rowId) => {
    this.setState({
      data: this.state.data.filter((row) => row.id !== rowId),
      searchData: this.state.searchData.filter((row) => row.id !== rowId),
    });
  };

  addToTable = (row) => {
    if (this.state.table.length === 0) {
      this.setState({ table: this.state.table.concat(row) });
    } else if (
      this.state.table.filter((oldRow) => oldRow.id === row.id).length === 0
    ) {
      this.setState({ table: this.state.table.concat(row) });
    }
  };

  showTable = () => {
    this.setState({ showTable: true });
  };

  deleteImport = (rowId) => {
    this.setState({
      table: this.state.table.filter((row) => row.id !== rowId),
    });
  };

  componentDidMount() {
    this.setState({ searchData: this.state.data });
  }

  render() {
    if (this.state.add) {
      return (
        <AddOrEdit
          title="Create New"
          mode="add"
          rowDetails={[]}
          cancelCallBack={this.cancel}
          saveCallBack={this.save}
        />
      );
    } else if (this.state.edit) {
      return (
        <AddOrEdit
          title="Edit"
          mode="edit"
          rowDetails={this.state.rowDetails}
          cancelCallBack={this.cancel}
          saveCallBack={this.save}
        />
      );
    } else if (this.state.showTable) {
      return (
        <ImportTable
          dataModel={this.state.table}
          backCallBack={this.cancel}
          deleteImportCallBack={this.deleteImport}
        />
      );
    } else {
      return (
        <section>
          <Search searchCallBack={this.search} />
          <DataTable
            dataModel={this.state.searchData}
            deleteCallBack={this.deleteRow}
            editCallBack={this.editRow}
            importCallBack={this.addToTable}
          />
          <div className="container-fluid">
            <button
              className="btn btn-primary m-1"
              aria-label="Add"
              onClick={this.addRow}
            >
              Add
            </button>
            <button
              className="btn btn-outline-success m-1"
              aria-label="Table"
              onClick={this.showTable}
            >
              Table-{this.state.table.length}
            </button>
            <button
              className="btn btn-secondary m-1"
              aria-label="Exit"
              onClick={() => this.props.logoutCallBack(false)}
            >
              Exit
            </button>
          </div>
        </section>
      );
    }
  }
}
