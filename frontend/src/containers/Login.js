import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Card,
  CardContent,
  Link,
} from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      navigate('/employees');
    } catch (error) {
      console.error('Error during login:', error);
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'radial-gradient(circle, #6a11cb, #2575fc)',
        animation: 'backgroundMove 10s infinite alternate',
        '@keyframes backgroundMove': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 400,
          width: '90%',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <CardContent
          sx={{
            padding: '30px',
            background: '#ffffff',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '60px',
              height: '60px',
              margin: '0 auto 20px',
              backgroundColor: '#6a11cb',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(106, 17, 203, 0.5)',
            }}
          >
            <Typography>🔒</Typography>
          </Box>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: '#333',
            }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                required
                InputProps={{
                  style: { borderRadius: '10px', backgroundColor: '#f7f7f7' },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                InputProps={{
                  style: { borderRadius: '10px', backgroundColor: '#f7f7f7' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontWeight: 'bold',
                  padding: '12px 0',
                  borderRadius: '10px',
                  backgroundColor: '#6a11cb',
                  color: '#fff',
                  boxShadow: '0 4px 10px rgba(106, 17, 203, 0.4)',
                  '&:hover': {
                    backgroundColor: '#4c0ca0',
                    boxShadow: '0 6px 15px rgba(76, 12, 160, 0.5)',
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </form>
          <Typography
            variant="body2"
            align="center"
            sx={{
              marginTop: 3,
              color: '#555',
              fontSize: '0.95rem',
            }}
          >
            Don't have an account?{' '}
            <Link
              onClick={() => navigate('/signup')}
              underline="hover"
              sx={{
                color: '#6a11cb',
                cursor: 'pointer',
                fontWeight: 'bold',
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#4c0ca0',
                },
              }}
            >
              Sign up here
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
