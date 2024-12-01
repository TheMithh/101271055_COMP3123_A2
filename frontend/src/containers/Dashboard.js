import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Dashboard() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #1d2671, #c33764)',
        color: '#fff',
        padding: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 2,
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        Dashboard
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 4,
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#f4f4f4',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        }}
      >
        Welcome to the dashboard! Manage your activities and stay on track.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: 'linear-gradient(to bottom, #1abc9c, #16a085)',
              color: '#fff',
              borderRadius: 4,
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Employees
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                View and manage your employees here.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: '#0e6655',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#0b5345',
                  },
                }}
                onClick={() => console.log('Navigate to Employees')}
              >
                View Employees
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: 'linear-gradient(to bottom, #f39c12, #e67e22)',
              color: '#fff',
              borderRadius: 4,
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Reports
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Generate and view reports for your organization.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: '#d35400',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#a04000',
                  },
                }}
                onClick={() => console.log('Navigate to Reports')}
              >
                View Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: 'linear-gradient(to bottom, #3498db, #2980b9)',
              color: '#fff',
              borderRadius: 4,
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Settings
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Configure your application settings.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: '#2471a3',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#1a5276',
                  },
                }}
                onClick={() => console.log('Navigate to Settings')}
              >
                Configure Settings
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
