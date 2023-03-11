import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
type column = {
  id:string,
  label: string,
  minWidth?: number

}
const columns:column[] = [
  { id: 'medicineName', label: 'Medicine Name', minWidth: 170 },
  { id: 'saltName', label: 'Salt Name', minWidth: 100 },
  {
    id: 'companyName',
    label: 'Company Name',
    minWidth: 170,
  },
  {
    id: 'packaging',
    label: 'Packaging',
    minWidth: 170,
  },
  {
    id: 'hsnCode',
    label: 'HSN Code',
    minWidth: 170,
  },
  {
    id: 'gst',
    label: 'GST',
    minWidth: 170,
  },
];

function createData(
  medicineName:string,
  saltName:string,
  companyName:string,
  hsnCode:string, gst:number
) {
  return { medicineName, saltName, companyName, hsnCode, gst };
}

const rows = [
  createData('India', 'IN', 'a', 'b',1),
  createData('China', 'CN', 'x','y',1),
];

export default function ProductDetailTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event:any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  // @ts-ignore
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.medicineName}>
                    {columns.map((column:column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} 
                        // @ts-ignore
                        align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
