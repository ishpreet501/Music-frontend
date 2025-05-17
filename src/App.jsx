import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin"; 
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoutes from "./components/Protectedroutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={
          <ProtectedRoutes><Admin /></ProtectedRoutes>} /> {/* Add /* to allow nested routing */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
