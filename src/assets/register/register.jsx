import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './registerSlice';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkTo } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    const userData = {
        email: event.target.email.value,
        password: event.target.password.value,
        address: event.target.address.value,
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
      };
    dispatch(registerUser(userData));
    navigate('/login')
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <span id='nav-filler'/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              autoComplete="first_name"
              autoFocus
            />
                  <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">
                    Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2">
                    <LinkTo to = "/login">
                        {"Already have an account? Sign Ip"}
                    </LinkTo>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>
  )
};

export default Register;
