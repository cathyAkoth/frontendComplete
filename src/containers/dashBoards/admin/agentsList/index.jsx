import "./agentsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { employerRows } from "../../../../adminDummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AgentsList() {
  const [data, setData] = useState(employerRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "agent",
      headerName: "Agent",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="employerListUser">
            <img className="employerListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "whatsapp",
      headerName: "WhatsApp No.",
      width: 170,
    },
    {
      field: "location",
      headerName: "Location",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="employerListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="employerListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="employerList">
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
