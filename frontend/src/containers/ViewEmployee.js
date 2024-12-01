import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material';

function ViewEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
        alert('Failed to fetch employee details');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'radial-gradient(circle, #6a11cb, #2575fc)',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#ffffff' }} />
      </Box>
    );
  }

  if (!employee) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            padding: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            color: '#e74c3c',
            fontWeight: 'bold',
          }}
        >
          Employee not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'radial-gradient(circle, #4facfe, #00f2fe)',
        padding: 2,
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 600,
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
        <CardContent>
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
            Employee Details
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Name:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#555' }}>
              {employee.name}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Department:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#555' }}>
              {employee.department}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Position:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#555' }}>
              {employee.position}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Salary:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#555' }}>
              ${employee.salary}
            </Typography>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate('/employees')}
            sx={{
              backgroundColor: '#4facfe',
              fontWeight: 'bold',
              padding: '12px 0',
              borderRadius: '8px',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#3a9ad7',
              },
            }}
          >
            Back to Employee List
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ViewEmployee;
