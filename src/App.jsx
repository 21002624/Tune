import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthProvider/AuthProvider';
import Log from './pages/Log/Log';
import Home from './pages/Home/Home';
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Log />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
