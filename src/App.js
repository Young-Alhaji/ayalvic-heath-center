import { buildQueries } from "@testing-library/react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
