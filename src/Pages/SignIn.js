import React from 'react';
import styles from "../Modules/signin.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)
  const [message, setmessage] = useState('')
  let navigate = useNavigate()
  let endpoint =''

const signin=()=>{
  setloading(true)
  setmessage('')
  let user ={email,password}
  user.email =email.trim()
  axios.post(endpoint,user).then((res)=>{
    setloading(false)
    console.log(res)
    setmessage(res.data.message)
    if(res.data.status==true){
        navigate('/')
    }
  })
  
}

  return (
    <>
    <center>
      <section className='boldpoppins'>
      <br /><br /><br />
        <div>
    <img src="logo.png" width="50" height="50" style={{borderRadius:'1000px'}} alt=""/>
        </div> <br />
        <div>
          <h1 className='boldpoppins'>Sign In</h1> <br />
          <h5 className='boldpoppins text-primary'>Sign in to your Ayalvic account</h5> <br />
        </div>
        <div>
        <i style={{fontSize: '120%'}} class="fa-solid fa-envelope"></i>  <input className={styles.input}
          type="text"
          placeholder='Email'
          onChange={(e)=>setemail(e.target.value)}/> <br /> <br />

        <i  style={{fontSize: '120%'}} class="fa-solid fa-lock"></i>  <input className={styles.input}
          type="password"
          placeholder='Password'
           onChange={(e)=>setpassword(e.target.value)} /> <br /><br />
           {loading ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )} <br />

          <button className='btn btn-primary' style={{width: '300px'}} onClick={signin}>Sign up</button> <br /><br />
          Don't have an account yet? <Link to='/'>Sign Up here</Link>

        </div>
      </section>
    </center>
    </>
  )
}

export default SignIn