import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='wrapper'>
        <footer class="footer" >
            <div className='logo'>
                <h2>Job<a href="#home">Match</a></h2>
                <p>Your Pathway to Career Success</p>
                <div className='desc'>JobMatch empowers individuals to navigate the job market 
                with confidence by providing a data-driven and personalized career guidance platform.</div>
            </div>
            <div class="row">
                <h5 class="row-title">Useful Links</h5>
                <ul class="row-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
            </div>
        </footer>
        <hr />
        <div className='footer-bottom'>
            <p>© 2023 JobMatch. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;
