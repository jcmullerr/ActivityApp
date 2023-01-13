import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const LoginComponent = () => {
    const [isSignup, setisSignup] = useState(false)
    const defaultState = {
        name: '',
        email: '',
        password: ''
    }

    const resetState = () => {
        setInputs(defaultState);
    }

    const handleIsSignupChange = () => {
        setisSignup(!isSignup);
        resetState();
    }

    const handleSubmit = (e: any) => {
        resetState()
        if (isSignup)
            setisSignup(!isSignup);
    }
    const [inputs, setInputs] = useState(defaultState)

    const handleChange = (e: any) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display='flex'
                flexDirection={"column"}
                alignItems="center"
                justifyContent={'center'}
                margin='auto'
                marginTop={5}
                padding={3}
            // borderRadius={5}
            // boxShadow={'5px 5px 10px #ccc'}
            // sx={{ ":hover": { boxShadow: '10px 10px 20px #ccc' } }}
            >
                <Typography variant='h2' padding={3} textAlign='center'>{isSignup ? 'Signup' : 'Login'}</Typography>
                {isSignup && <TextField name='name' value={inputs.name} onChange={handleChange} margin='normal' type={'text'} variant='outlined' placeholder='Name' />}
                <TextField name='email' value={inputs.email} onChange={handleChange} margin='normal' type={'email'} variant='outlined' placeholder='Email' />
                <TextField name='password' value={inputs.password} onChange={handleChange} margin='normal' type={'password'} variant='outlined' placeholder='Password' />
                <Button endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />} type='submit' variant='contained' color='secondary' sx={{ marginTop: 3, borderRadius: 3 }}>{isSignup ? 'Signup' : 'Login'}</Button>
                <Button endIcon={isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />} onClick={handleIsSignupChange} variant='text' color='primary' sx={{ marginTop: 3, borderRadius: 3 }}>go to {isSignup ? 'Login' : 'Signup'}</Button>
            </Box>
        </form>
    )
}

export default LoginComponent;