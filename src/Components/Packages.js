import React from 'react'
import styles from "../Modules/packages.module.css"

const Packages = () => {
  return (
    <>
    <center>
        <div className='container'>
            <div className='row'>

                <button className='col-md-4 border-0 bg-white'>
                    <div className='card bg-success text-white border-0 my-2'>
                        <div className='card-body bg-success'>
                            <h1><i className='fa-solid fa-user-doctor' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Find a Doctor</h5>
                            <p class="card-text">Search for a Doctor to attend to your medical needs.</p>
                        </div>
                    </div>
                </button>
                <button className='col-md-4 border-0 bg-white'>
                <div className='card bg-dark text-white border-0 my-2'>
                        <div className='card-body bg-dark'>
                            <h1><i className='fa-solid fa-plus' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Send an Inquiry</h5> <br />
                            <p class="card-text">Ask about our treatments and services.</p>
                        </div>
                    </div>
                </button>
                <button className='col-md-4 border-0 bg-white'>
                <div className='card bg-primary text-white border-0 my-2'>
                        <div className='card-body bg-primary'>
                            <h1><i className='fa-solid fa-calendar-check' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Book Appointment</h5> <br />
                            <p class="card-text">Schedule your visit online.</p>
                        </div>
                    </div>
                </button>

            </div>

        </div> <br /><br />

        <h2 className='text-success'>Recommended Packages</h2>
        <p style={{borderBottom:'2px solid black',width:'150px'}}></p> <br /><br />


        <section>
        <div className='container'>
            <div className='row'>

                <div className='col-md-4'>
                    <div className='card'>
                    <img class="card-img-top" src="package1.png" alt="Card image cap"/>
                        <div className='card-body'>
                            <h1><i className='fa-solid fa-user-doctor' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Find a Doctor</h5>
                            <p class="card-text">Search for a Doctor to attend to your medical needs.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='card'>
                <img class="card-img-top" src="package2.png" alt="Card image cap"/>
                        <div className='card-body'>
                            <h1><i className='fa-solid fa-plus' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Send an Inquiry</h5> <br />
                            <p class="card-text">Ask about our treatments and services.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='card'>
                <img class="card-img-top" src="package3.png" alt="Card image cap"/>
                        <div className='card-body'>
                            <h1><i className='fa-solid fa-calendar-check' style={{border:'2px solid white',borderRadius:'1000px',padding:'20px'}}></i></h1>
                            <h5 class="card-title">Book Appointment</h5> <br />
                            <p class="card-text">Schedule your visit online.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div> <br /><br />
        </section>
    </center>
    </>
  )
}

export default Packages