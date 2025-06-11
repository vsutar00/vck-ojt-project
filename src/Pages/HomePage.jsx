import React from 'react'
import Header from '../Component/Header/Header';
import './HomePage.css'
import Footer from '../Component/Footer/Footer';


const HomePage = () => {
    return (
      <>
      <Header/>
      <div className='main'>
     <header>
     
        <div className="content">
            <div className="page-container">
                <div className="hero-overlay-text">
                    <h1><strong>Welcome to Vivekanand College!</strong></h1>
                    <p>Your journey to excellence starts here.</p>
                    <a className="btn hero-btn" href="/AdmissionPage">Apply Now!</a>
                    
                </div>
            </div>
        </div>
        </header>
        <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why Choose Vivekanand College?</h2><hr/>

                    <ul><li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
<li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
<li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
<li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
<li>*Strong Plac*ements:** Excellent career opportunities with leading companies</li></ul>
<h2><strong>Campus Life & Facilities</strong></h2><hr/>
<img src="\images\students-studying-DbLGuwF_.jpeg" className="left"></img>
<img src="\images\campus-life-Crkero7B.jpg" className="right"></img>

<p className='clear'>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.

</p>
<p className='clear'>Ready to explore our courses</p>
<a href ="/CoursesPage" className="btn primary-btn">Explore Courses</a></div>
        <Footer/>
      </>
    );
}
export default HomePage