import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
          <footer className="py-3 ">
            <p className="text-center text-body-secondary"> © 2025 Vivekanand College. All rights reserved.</p>
          </footer>
        </div>
    );
}
export default Footer