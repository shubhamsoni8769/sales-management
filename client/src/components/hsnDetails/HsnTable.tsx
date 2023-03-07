import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { HsnDetails } from "./HsnForm";

interface HsnTable{
  rowData:HsnDetails[]
}
const Hsntable = ({ rowData }:HsnTable) => {
  const [data, setData] = useState<HsnDetails[]>(rowData);

  useEffect(() => {
    setData(rowData);
  }, [rowData]);

  const columns = [
    { field: "hsnNo", headerName: "HSN No." },
    { field: "gst", headerName: "GST No.",width:150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 400,
      renderCell: (params: any) => {
        return (
          <Button onClick={(e) => handleClick(e, params.row)}>
            <DeleteIcon style={{ color: "black" }} />
          </Button>
        );
      },
    },
  ];

  const handleClick = (e: any, row: HsnDetails) => {
    const filteredData = data?.filter((e: HsnDetails) => {
      return e.id !== row.id;
    });
    setData(filteredData);
  };
  
  return (
    <div style={{ height: 400, width: "100%", marginTop: "24px" }}>
      <DataGrid
        rows={data}
        columns={columns}
      />
    </div>
  );
};
export default Hsntable;
