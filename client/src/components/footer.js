import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='wrapper'>
        <footer className="footer" >
            <div className='logo'>
                <h2>Job<a href="#home">Match</a></h2>
                <p>Empowering your career journey with AI-driven insights</p>
                <div className='feature'>
                  <div >
                    <h4>Personalized Job Matching</h4>
                    <div className='desc'>Discover job roles tailored to your skills and aspirations with our intelligent AI matching.</div>
                  </div>
                  <div>
                    <h4>Skills Gap Analysis</h4>
                    <div className='desc'>Identify and bridge your knowledge gaps with our comprehensive quiz-based skill assessments.</div>
                  </div>
                </div>
            </div>
            <div className="row">
                <h5 className="row-title">Useful Links</h5>
                <ul className="row-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
        <div className='hr'> </div>
        <div className='footer-bottom'>
            <p>© 2024 JobMatch. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;