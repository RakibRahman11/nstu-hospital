import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import vc from '../../../Images/vc.png'
import campus from '../../../Images/campus.jpg'

const messageBg = {
    background: `url(${campus})`,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundBlendMode: 'lighten, luminosity'
}

const Message = () => {
    return (
        <Container >
            <Typography sx={{ fontWeight: 700, marginY: 5, textAlign: 'center' }} variant="h4" display="block" gutterBottom>
                Message from Vice Chancellor
            </Typography>
            <Grid container spacing={4} style={messageBg} sx={{ marginY: 3 }}>
                <Grid sx={{ marginY: 'auto', marginX:'5%' }} xs={2} md={2}>
                    <img style={{ width: '75%' }} src={vc} alt="" />
                    <Typography variant="h6" display="block" gutterBottom>
                        Professor Dr. Md. Didar-Ul-Alam
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Vice Chancellor <br />
                        Noakhali Science and Technology University <br />
                        Noakhali-3814, Bangladesh.
                    </Typography>
                </Grid>
                <Grid xs={8} md={8}>
                    <Typography sx={{ textAlign: 'justify', marginY: '10%', marginX: '45px', fontStyle: 'italic' }} variant="h6" display="block" gutterBottom>
                        It's a great pleasure to me to welcome you to Noakhali Science and Technology University(NSTU).This is the 27th public university which was established on 15th July 2001, and the academic activities start on 22th June 2006, having 13 teachers, 180 students with four departments namely Department of Computer Science and Telecommunication Engineering (CSTE), Department of Pharmacy, Department of Applied Chemistry and Chemical Engineering (ACCE) and Department of Fisheries and Marine Science (FIMS). Now the University made its standard world class and addressed as the “Cambridge of the Coastal terrain.”
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Message;