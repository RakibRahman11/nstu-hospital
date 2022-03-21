import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Professor Dr. Mohammed Faruque Uddin', 'Chief Medical officer (Administrative Responsibility)', '01713124030'),
    createData('Dr. Esmat Ara Parvin', 'Deputy Chief Medical officer(Current Responsibility)', '01764341056'),
    createData('Dr. Lopa Das', 'Senior Medical officer', '01717600096'),
    createData('Dr. Shahjabin Sharna', 'Medical officer (Residence)', '01728776208'),
    createData('Mrs. Nomita Rani Dey', 'Nurse', '01865538596'),
    createData('Mr. Muhammad Jahidur Rahman', 'Medical assistant', 'N/A'),
    createData('Mr. Abdul Hakim', 'Medical attendant', 'N/A'),
    createData('Mrs. Najnin Akter', 'Medical attendant', 'N/A'),
    createData('Mrs. Salma Akter', 'Care taker', 'N/A'),
    createData('Mrs. Razia Akter', 'Computer operator', 'N/A')
];

const Members = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 700, textAlign: 'center', marginTop: 5 }} variant="h4" display="block" gutterBottom>
                Officers and Staffs
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, marginBottom: 5 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Designation</TableCell>
                            <TableCell align="right">Contact number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Members;