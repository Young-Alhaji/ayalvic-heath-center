import React from 'react'
import styles from "../Modules/titletop.module.css";
import { useNavigate } from 'react-router-dom';

const TitleTop = () => {
  let navigate= useNavigate()
  const landnav =()=>{
    navigate('/signin')
  }
  return (
    <>
    <div className='bg-dark' style={{position:'relative'}}>
        <img src="building.jpg" alt="building" className={styles.img} />
             <div style={{position:'absolute',top: '100px',left: '25px'}}>
             <p className={styles.titlefont} >
             AYALVIC MEDICAL CENTER <br />
             </p> <br />
             <div className={styles.subtitle}>
             
             The Right Care ? &nbsp;Right here. Changing Health Care for Good. Be here, Be healthy.
             
             <br />
             
              <button className={styles.greenbutton} onClick={landnav}>
                GET STARTED
              </button>  <br /><br />
             </div>
             </div>   
    </div>
    </>
  )
}

export default TitleTop