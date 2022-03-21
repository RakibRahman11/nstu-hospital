import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import aid from '../../../Images/bandage.png'
import pills from '../../../Images/pills.png'
import prescription from '../../../Images/prescription.png'

const Services = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography sx={{ fontWeight: 700, textAlign: 'center', marginY: 3 }} variant="h4" display="block" gutterBottom>
                We are ready to help you
            </Typography>
            <Grid container spacing={2} sx={{ marginLeft: '12%' }}>
                <Grid xs={4} md={4}>
                    <img src={aid} style={{ width: '25%' }} alt="" />
                    <Typography variant="button" display="block" gutterBottom>
                        First Aid
                    </Typography>
                </Grid>
                <Grid xs={4} md={4}>
                    <img src={pills} style={{ width: '25%' }} alt="" />
                    <Typography variant="button" display="block" gutterBottom>
                        Medicines
                    </Typography>
                </Grid>
                <Grid xs={4} md={4}>
                    <img src={prescription} style={{ width: '25%' }} alt="" />
                    <Typography variant="button" display="block" gutterBottom>
                        Prescription
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Services;