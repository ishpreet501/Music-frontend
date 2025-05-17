import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import Songs from './Songs';
import Discography from './Discography';

const Admin = () => {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Navigate to="songs" />} /> {/* Redirect to songs */}
        <Route path="songs" element={<Songs />} />
        <Route path="discography" element={<Discography />} /> 
      </Routes>
    </>
  );
};

export default Admin;
