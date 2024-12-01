import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  TextField,
  Grid,
} from '@mui/material';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchDepartment, setSearchDepartment] = useState('');
  const [searchPosition, setSearchPosition] = useState('');
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/employees');
      setEmployees(response.data);
      setFilteredEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      alert('Failed to fetch employees');
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/employees/${id}`);
      alert('Employee deleted successfully!');
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee');
    }
  };

  const handleSearch = () => {
    let filtered = employees;
    if (searchDepartment) {
      filtered = filtered.filter((employee) =>
        employee.department.toLowerCase().includes(searchDepartment.toLowerCase())
      );
    }
    if (searchPosition) {
      filtered = filtered.filter((employee) =>
        employee.position.toLowerCase().includes(searchPosition.toLowerCase())
      );
    }
    setFilteredEmployees(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/');
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Box
      sx={{
        padding: '30px',
        background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#1976d2',
          }}
        >
          Employee List
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/employees/add')}
            sx={{
              backgroundColor: '#43a047',
              fontWeight: 'bold',
              padding: '10px 20px',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#388e3c' },
            }}
          >
            Add Employee
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
            sx={{
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '8px',
              textTransform: 'uppercase',
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          marginBottom: '20px',
        }}
      >
        <TextField
          label="Search by Department"
          variant="outlined"
          value={searchDepartment}
          onChange={(e) => setSearchDepartment(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
        />
        <TextField
          label="Search by Position"
          variant="outlined"
          value={searchPosition}
          onChange={(e) => setSearchPosition(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{
            fontWeight: 'bold',
            padding: '12px 20px',
            textTransform: 'uppercase',
            borderRadius: '8px',
          }}
        >
          Search
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Table>
          <TableHead
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Department</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Position</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Salary</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee, index) => (
              <TableRow
                key={employee._id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>${employee.salary}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => navigate(`/employees/view/${employee._id}`)}
                    sx={{ marginRight: '8px' }}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => navigate(`/employees/update/${employee._id}`)}
                    sx={{ marginRight: '8px' }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteEmployee(employee._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EmployeeList;
