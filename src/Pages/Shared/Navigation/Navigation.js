import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, googleSignIn, logOut } = useAuth()
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
                                <Button onClick={logOut} color="inherit">{user.displayName}, logout</Button>
                            </div>
                            :
                            <div>
                                <Button onClick={googleSignIn} color="inherit">Login</Button>
                            </div>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;