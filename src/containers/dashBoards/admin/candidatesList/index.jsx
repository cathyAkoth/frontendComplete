import "./maidList.css";
import { Outlet } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { maidRows } from "../../../../adminDummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function CandidatesList() {
  const [data, setData] = useState(maidRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "maid",
      headerName: "Maid",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="maidListUser">
            <img className="maidListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "mobileNumber", headerName: "Mobile Number", width: 175 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "district",
      headerName: "District",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"local-maid/" + params.row.id}>
              <button className="maidListEdit">Edit</button>
            </Link>
            <Outlet />
            <DeleteOutline
              className="maidListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="maidList">
      <div className="candidate-list-header">
        <div className="title">All Candidates</div>
        <Link to="register">
          <Button className="new-btn" variant="contained">
            Create
          </Button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
