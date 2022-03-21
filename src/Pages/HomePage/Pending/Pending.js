import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, TableCell, TableRow } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Pending = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useAuth()
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://whispering-scrubland-48380.herokuapp.com/placeOrder')
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])
    const find = order?.filter(item => item.userEmail === user.email)
    const myOrders = [...find]

    return (
        <Container>
            <Button onClick={handleOpen}>Pending appointments</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your pending appointments
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name} followed by
                                </TableCell>
                                <TableCell sx={{ color:'red' }} align="right">{row?.member}</TableCell>
                            </TableRow>
                        ))}
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );
};

export default Pending;