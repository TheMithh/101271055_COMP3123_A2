import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard';
import AddEmployee from './containers/AddEmployee';
import EmployeeList from './containers/EmployeeList';
import UpdateEmployee from './containers/UpdateEmployee';
import ViewEmployee from './containers/ViewEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/update/:id" element={<UpdateEmployee />} />
        <Route path="/employees/view/:id" element={<ViewEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
