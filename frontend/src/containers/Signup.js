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
} from '@mui/material';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/users/signup', { username, password });
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      alert('Error during signup');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'radial-gradient(circle, #ff7e5f, #feb47b)',
        animation: 'backgroundShift 10s infinite alternate',
        '@keyframes backgroundShift': {
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
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
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
              backgroundColor: '#ff7e5f',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(255, 126, 95, 0.5)',
            }}
          >
            ✍️
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
            Signup
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
                  backgroundColor: '#ff7e5f',
                  color: '#fff',
                  boxShadow: '0 4px 10px rgba(255, 126, 95, 0.4)',
                  '&:hover': {
                    backgroundColor: '#e76b51',
                    boxShadow: '0 6px 15px rgba(231, 107, 81, 0.5)',
                  },
                }}
              >
                Signup
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => navigate('/')}
                sx={{
                  fontWeight: 'bold',
                  padding: '12px 0',
                  borderRadius: '10px',
                  borderColor: '#ff7e5f',
                  color: '#ff7e5f',
                  '&:hover': {
                    borderColor: '#e76b51',
                    color: '#e76b51',
                    backgroundColor: 'rgba(255, 126, 95, 0.1)',
                  },
                }}
              >
                Back to Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Signup;
