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
  Grid,
} from '@mui/material';

function AddEmployee() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/employees', {
        name,
        department,
        position,
        salary,
      });
      alert('Employee added successfully!');
      navigate('/employees');
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee');
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1c92d2, #f2fcfe)',
        padding: 2,
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 700,
          width: '100%',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          color: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CardContent
          sx={{
            padding: 4,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-50px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '100px',
              background: '#ff5722',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              fontSize: '30px',
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            +
          </Box>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#fff',
              mt: 5,
            }}
          >
            Add Employee
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { backgroundColor: '#fff', borderRadius: 10 },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Department"
                  variant="filled"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { backgroundColor: '#fff', borderRadius: 10 },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Position"
                  variant="filled"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { backgroundColor: '#fff', borderRadius: 10 },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Salary"
                  variant="filled"
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { backgroundColor: '#fff', borderRadius: 10 },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#ff5722',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '15px 20px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    boxShadow: '0px 5px 15px rgba(255, 87, 34, 0.4)',
                    '&:hover': {
                      backgroundColor: '#e64a19',
                      boxShadow: '0px 5px 15px rgba(255, 87, 34, 0.7)',
                    },
                  }}
                >
                  Add Employee
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate('/employees')}
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    fontWeight: 'bold',
                    padding: '15px 20px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: '#fff',
                    },
                  }}
                >
                  Back to Employee List
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AddEmployee;
