import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const userEmail = user?.email
        const information = { ...data, userEmail }
        axios.post('https://whispering-scrubland-48380.herokuapp.com/placeOrder', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset()
            })
    };
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }} gutterBottom component="div">
                Book an appointment
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ paddingLeft: '25%' }}>
                <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Your Name"  {...register("name")} required />
                <br /><br />

                <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Student ID"  {...register("id")} required />
                <br /><br />

                <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Contact Number" type="number"  {...register("contact")} required />
                <br /><br />

                <select style={{ width: '35%', padding: '3px', fontSize: 15 }} {...register("member")}>
                    <option value="Dr. Faruque">Professor Dr. Mohammed Faruque Uddin</option>
                    <option value="Dr. Esmat">Dr. Esmat Ara Parvin</option>
                    <option value="Dr. Lopa">Dr. Lopa Das</option>
                    <option value="Dr. Shahjabin">Dr. Shahjabin Sharna</option>
                </select>
                <br /><br />

                <Button type="submit" variant="outlined" sx={{ color: 'black', borderColor: 'text.primary' }}>Submit</Button>
            </form>
        </Container>
    );
};

export default Appointments;