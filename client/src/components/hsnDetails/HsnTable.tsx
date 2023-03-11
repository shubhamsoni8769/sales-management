import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IHsnDetails, IHsnTable } from "../../types/hsndetails";


const Hsntable = ({ rowData }:IHsnTable) => {
  const [data, setData] = useState<IHsnDetails[]>(rowData);

  useEffect(() => {
    setData(rowData);
  }, [rowData]);

  const columns = [
    { field: "hsnNo", headerName: "HSN No.",width:200,sortable:false },
    { field: "gst", headerName: "GST No.",width:130,sortable:false },
    {
      field: "actions",
      headerName: "Actions",
      width: 400,
      renderCell: (params: any) => {
        return (
          <Button onClick={(e:React.MouseEvent) => handleClick(e, params.row)}>
            <DeleteIcon style={{ color: "black" }} />
          </Button>
        );
      },
    },
  ];

  const handleClick = (e: React.MouseEvent, row: IHsnDetails) => {
    const filteredData = data?.filter((e: IHsnDetails) => {
      return e.id !== row.id;
    });
    setData(filteredData);
  };
  
  return (
    <div style={{ height: 400, width: "100%", marginTop: "24px" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
      />
    </div>
  );
};
export default Hsntable;
