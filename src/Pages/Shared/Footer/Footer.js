import { Grid } from '@mui/material';
import React from 'react';
import logo from '../../../Images/logo.png'

const Footer = () => {
    return (
        <Grid sx={{boxShadow: 3}} container style={{  color: 'black', padding: '40px', width: '100%' }}>
            <Grid xs={4} md={2}>
                <img src={logo} style={{width:"60%"}} alt="" />
            </Grid>
            <Grid xs={4} md={6}>
                <h4>Noakhali Science and Technology University</h4>
                <p>Noakhali-3814, Bangladesh</p>
                <p>Medical Center</p>
                <p>Phone: 02334496572 (Office)</p>
                <p>Website : www.nstu.edu.bd</p>
            </Grid>
            <Grid xs={4} md={4}>
                <h4>Important links</h4>
                <p>Support and Services</p>
                <p>Doctors' List</p>
                <p>Emergency</p>
                <p>Authorization</p>
            </Grid>
        </Grid>

    );
};

export default Footer;