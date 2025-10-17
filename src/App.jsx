import { useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { UserContext } from './contexts/UserContext';


const App = () => {  
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </>
        )}
        {user && (
          <>
            <Route path="/" element={<Navigate to="/skins" />} />
            <Route path="/skins" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
