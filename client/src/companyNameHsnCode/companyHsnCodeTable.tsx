import { Button, Grid } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


interface companyRowValues { companyNameList: string[], deleteItemEvent: any }
const CompanyHSnCodeTable = (props: companyRowValues) => {
    function createData(
        companyName: string,
        deleteAction: string
    ) {
        return { companyName, deleteAction };
    }
    const rows: any = [];
    const { companyNameList, deleteItemEvent } = props;
    companyNameList.forEach(ele => {
        if (ele !== '')
            rows.push(createData(ele, 'DELETE'));
    });
    return (
        <>
            {
                <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row: any, index: number) => (
                                    <TableRow
                                        key={row.companyName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.companyName}
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={() => { deleteItemEvent(index) }} color="error" variant="outlined">{row.deleteAction}</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
        </>
    )
};

export default CompanyHSnCodeTable;
