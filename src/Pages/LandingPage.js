import React from 'react'
import Navbar from "../Components/Navbar";
import styles from "../Modules/landingPage.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import TitleTop from '../Components/TitleTop';
import Packages from '../Components/Packages';
const LandingPage = () => {
  return (
    <>
    <div>
      <div className='bg-dark'>
        <Navbar/>
      </div>
        <TitleTop/> <br /><br />
        <Packages/>
        <center>
        </center>

    </div>
    </>
  )
}

export default LandingPage