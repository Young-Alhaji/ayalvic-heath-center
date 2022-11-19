import { buildQueries } from "@testing-library/react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  );
}

export default App;
