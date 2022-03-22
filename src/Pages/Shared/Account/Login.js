import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [login, setLogin] = useState(false)
    const [registerData, setRegisterData] = useState({})
    const [loginData, setLoginData] = useState({})
    const { googleSignIn, newUser, userSignIn } = useAuth()

    // Register user
    const handleAccount = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let updateData = { ...registerData }
        updateData[field] = value
        console.log(updateData)
        setRegisterData(updateData)
    }
    const handleRegistration = e => {
        if (registerData.password !== registerData.retypePassword) {
            return alert('Password do not match')
        }
        newUser(registerData.name, registerData.email, registerData.password)
        e.preventDefault()
    }

    // Login user
    const handleLogIn = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let updateData = { ...loginData }
        updateData[field] = value
        console.log(updateData)
        setLoginData(updateData)
    }
    const handleLogin = e => {
        userSignIn(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container sx={{ marginLeft: '10%' }}>
            {!login && <div>
                <h3>Login to your account</h3>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        type="email"
                        name='email'
                        onBlur={handleLogIn}
                        variant="standard"
                    />
                    <br /><br />
                    <TextField
                        label="Password"
                        onBlur={handleLogIn}
                        type="password"
                        name='password'
                        variant="standard"
                    />
                    <br />

                    <Button onClick={() => setLogin(true)}>Don't have account?</Button>
                    <br /><br />

                    <Button type="submit" sx={{ backgroundColor: 'black', marginLeft: '20%' }} variant="contained">Login</Button>
                    <br /><br />
                </form>

                <Button onClick={googleSignIn} sx={{ backgroundColor: 'black' }} variant="contained">Continue with Google</Button>
            </div>
            }

            {login && <div>
                <h3>Please registration</h3>
                <form onSubmit={handleRegistration}>
                    <TextField
                        label="Name"
                        type="text"
                        name='name'
                        onBlur={handleAccount}
                        variant="standard"
                    />
                    <br /><br />
                    <TextField
                        label="Email"
                        type="email"
                        name='email'
                        onBlur={handleAccount}
                        variant="standard"
                    />
                    <br /><br />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleAccount}
                        variant="standard"
                    />
                    <br /><br />
                    <TextField
                        label="Retype-password"
                        type="password"
                        name="retypePassword"
                        onBlur={handleAccount}
                        variant="standard"
                    />
                    <br />

                    <Button onClick={() => setLogin(false)}>Already account?</Button>
                    <br /><br />

                    <Button type="submit" sx={{ backgroundColor: 'black', marginLeft: '20%' }} variant="contained">Register</Button>
                </form>
            </div>}
        </Container>
    );
};

export default Login;