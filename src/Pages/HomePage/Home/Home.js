import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointments from '../Appointments/Appointments';
import Banner from '../Banner/Banner';
import Members from '../Members/Members';
import Message from '../Message/Message';
import Pending from '../Pending/Pending';
import Services from '../Services/Services';

const Home = () => {
    const { user, googleSignIn } = useAuth()
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Members></Members>
            {
                user.email ?
                    <div>
                        <Appointments></Appointments>
                        <Pending></Pending>
                    </div>
                    :
                    <div>
                        <Typography onClick={googleSignIn} variant="button" sx={{ textAlign: 'center', marginY: 5, fontWeight: 700, fontSize: 30 }} display="block" gutterBottom>
                            Please login to book an appointment 
                        </Typography>
                    </div>

            }
            <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;