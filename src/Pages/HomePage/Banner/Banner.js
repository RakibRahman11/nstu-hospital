import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../Images/banner.jpg'

const Banner = () => {
    return (
        <Container>
            <Grid container spacing={4} sx={{ marginY: 5 }}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h4" gutterBottom component="div">
                        Noakhali Science and Technology University
                    </Typography>
                    <Typography variant="body1" sx={{textAlign:'justify'}} gutterBottom>
                        The creation of a band of skilled manpower equipped with latest knowledge of science and technology is a must to achieve a prestigious position in this modern world. As a part of ensuring quality education, with immense expectations of the southern coastal inhabitants of Bangladesh, a new university named Noakhali Science and Technology University (abbreviated as NSTU) was established on 15 July 2001 enacting the Noakhali Science and Technology University Act 2001. 
                        <br/>
                        Finally, it started its academic activities on 22 June 2006. The inclusion of the study of humanities implies the urge felt by the concerned authority to create leaders who will fashion a more humane and just world. The university not only engages itself in teaching and research but also provides societal services for the benefit of rural and urban populations.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img src={banner} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;