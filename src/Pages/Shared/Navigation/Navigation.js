import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { Modal } from '@mui/material';
import Login from '../Account/Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
};

const Navigation = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 0, border: 0, marginTop: 1 }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        NSTU HOSPITAL
                    </Typography>
                    {
                        user.email ?
                            <div>
                                <Button onClick={logOut} color="inherit">{user.displayName} logout</Button>
                            </div>
                            :
                            <div>
                                <Button onClick={handleOpen}>Login</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Login></Login>
                                    </Box>
                                </Modal>
                            </div>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;