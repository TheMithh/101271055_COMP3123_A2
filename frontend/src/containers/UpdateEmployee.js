import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    position: '',
    salary: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
        alert('Failed to fetch employee');
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/employees/${id}`, employee);
      alert('Employee updated successfully!');
      navigate('/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'radial-gradient(circle, #4facfe, #00f2fe)',
        animation: 'backgroundShift 8s infinite alternate',
        '@keyframes backgroundShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 500,
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
            backgroundColor: '#ffffff',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '60px',
              height: '60px',
              margin: '0 auto 20px',
              backgroundColor: '#4facfe',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(79, 172, 254, 0.5)',
            }}
          >
            🛠️
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
            Update Employee
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                label="Name"
                variant="outlined"
                value={employee.name}
                onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                fullWidth
                required
                InputProps={{
                  style: { borderRadius: '10px', backgroundColor: '#f7f7f7' },
                }}
              />
              <TextField
                label="Department"
                variant="outlined"
                value={employee.department}
                onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                fullWidth
                required
                InputProps={{
                  style: { borderRadius: '10px', backgroundColor: '#f7f7f7' },
                }}
              />
              <TextField
                label="Position"
                variant="outlined"
                value={employee.position}
                onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                fullWidth
                required
                InputProps={{
                  style: { borderRadius: '10px', backgroundColor: '#f7f7f7' },
                }}
              />
              <TextField
                label="Salary"
                variant="outlined"
                type="number"
                value={employee.salary}
                onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
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
                  backgroundColor: '#4facfe',
                  color: '#fff',
                  boxShadow: '0 4px 10px rgba(79, 172, 254, 0.4)',
                  '&:hover': {
                    backgroundColor: '#3a9ad7',
                    boxShadow: '0 6px 15px rgba(58, 154, 215, 0.5)',
                  },
                }}
              >
                Update Employee
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => navigate('/employees')}
                sx={{
                  fontWeight: 'bold',
                  padding: '12px 0',
                  borderRadius: '10px',
                  borderColor: '#4facfe',
                  color: '#4facfe',
                  '&:hover': {
                    borderColor: '#3a9ad7',
                    color: '#3a9ad7',
                    backgroundColor: 'rgba(79, 172, 254, 0.1)',
                  },
                }}
              >
                Back to Employee List
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UpdateEmployee;
