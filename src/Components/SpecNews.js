import React from 'react'
import { Link } from 'react-router-dom'
import "../Modules/specnews.css";

const SpecNews = () => {
  return (
    <>
    <center>
        <h2 className='text-success'>Our Specialty Centers</h2>
        <p style={{borderBottom:'2px solid grey',width:'150px'}}></p> <br /><br />

        <section className='container'>
        <div id="demo" class="carousel slide" data-ride="carousel">

{/* <!-- Indicators --> */}
<ul class="carousel-indicators bg-dark">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

{/* <!-- The slideshow --> */}
<div class="carousel-inner">

  <div class="carousel-item active">
    <img class="d-block w-100 specimg" src="speciality1.png" alt="Neurocritical Care image"/>
    <div class="carousel-caption">
        <h3>Neurocritical Care</h3>
        <p className='d-none d-md-block'>The Neurocritical Care, Ayalvic Medic Center, provides neurological and cerebal intensive care with the evidence based best practice</p>
  </div>
  </div>

  <div class="carousel-item">
    <img class="d-block w-100 specimg" src="speciality2.png" alt="Motility Center"/>
    <div class="carousel-caption text-dark">
        <h3>Gastrointestinal Motility Center</h3>
        <p class="font-weight-bold d-none d-md-block">Gastrointestinal Motility Center, offers a holistic range of services including consultation, diagnosis and treatment of functional disorders of the gastrointestinal system from the upper to the lower parts</p>
  </div>
  </div>

  <div class="carousel-item">
    <img className="d-block w-100 specimg" src="speciality3.png" alt="Urology Center"/>
    <div class="carousel-caption text-dark">
        <h3>Urology Center</h3>
        <p class="font-weight-bold d-none d-md-block">We focus on non-invasive and minimally invasive treatments so that we can give you the best possible results with the minimum amount of discomfort. </p>
  </div>
  </div>

</div>

 {/* Left and right controls */}
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon bg-dark"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon bg-dark"></span>
</a>

</div>
        </section> <br /><br /><br /><br />



        <section>
        <h2 className='text-dark'>Ayalvic News</h2>
        <p style={{borderBottom:'2px solid grey',width:'100px'}}></p> <br /><br />

        <div className='container'>
            <div className='row'>

            <div className='col-md-4 my-2'>
                <div className='card wow animate__animated animate__pulse'>
                <img class="card-img-top" src="news1.png" alt="Card image cap" height='200px'/>
                        <div className='card-body'>
                            <h5 class="card-title text-success">Ayalvic Enhances its Eye Center by Establishing the Cornea... </h5>
                            <p class="card-text">Ayalvic Enhances its Eye Center by Establishing the Cornea Transplant Center — And is the First Private Hospital in Nigeria to Provide Comprehensive Services for Complex Corneal Conditions</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 my-2'>
                    <div className='card wow animate__animated animate__pulse'>
                    <img class="card-img-top" src="news2.png" alt="Card image cap" height='200px'/>
                        <div className='card-body'>
                            <h5 class="card-title text-success">Ayalvic opens its Gastrointestinal Motility Center</h5>
                            <p class="card-text">In collaboration between Center of Excellence in Neurogastroenterology and Motility, Faculty of Medicine, Obafemi University and Ayalvic Medic Center, providing accurate diagnosis and proper treatment to all types of gastrointestinal conditions.</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 my-2'>
                <div className='card wow animate__animated animate__pulse'>
                <img class="card-img-top" src="news3.png" alt="Card image cap" height='200px'/>
                        <div className='card-body'>
                            <h5 class="card-title text-success">Ayalvic Inoculates International Monks Against...</h5>
                            <p class="card-text">For the occasions of Ayalvic 2nd anniversary and National Nurses Day,Prof Dr. Young Alhaji has granted Dr. Ayoola Demilade to lead a Ayalvic volunteer team, including nurses, medical personnel, and staff to offer Modern COVID-19 vaccinations and lunch to monks studying at the University. </p>
                        </div>
                    </div>
                </div>

            </div>

        </div> <br /><br /> <br /><br />
        </section>
    </center>
    </>
  )
}

export default SpecNews