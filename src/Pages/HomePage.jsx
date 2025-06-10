import React from 'react'
import Header from '../Component/Header/Header';
import './HomePage.css'
import Footer from '../Component/Footer/Footer';


const HomePage = () => {
    return (
      <>
     <Header />
     
        <div className="content">
            <div className="page-container">
                <div className="hero-overlay-text">
                    <h1>Welcome to Vivekanand College!</h1>
                    <p>Your journey to excellence starts here.</p>
                    <a className="btn hero-btn" href="/AdmissionPage">Apply Now!</a>
                </div>
            </div>
        </div>
        <Footer/>
      </>
    );
}
export default HomePage