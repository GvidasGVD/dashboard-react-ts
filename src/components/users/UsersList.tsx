import classes from "./UsersList.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbar
} from "@material-ui/data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "U ID", width: 110 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className={classes.user_list_user}>
            <img
              className={classes.user_list_img}
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className={classes.user_list_edit}>Edit</button>
            </Link>
            <RiDeleteBinLine
              className={classes.user_list_delete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbar/>
      </GridToolbarContainer>
    );
  }

  return (
    <div className={classes.user_list}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
