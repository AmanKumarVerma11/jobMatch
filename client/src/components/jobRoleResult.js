import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import StepProgressBar from './stepProgressBar';
import '../styles/jobRoleResult.css';
import bcomet from '../assets/big-comet.svg';
import cometEmo from '../assets/comet-emoji.svg';
import comet from '../assets/comet.svg';
import ellipse from '../assets/ellipse.svg';
import orbit from '../assets/orbit.svg';
import scomet from '../assets/small-comet.svg';

const JobRoleResult = () => {
    const location = useLocation();
    const jobRoleData = location.state?.jobRoleData;

    return (
        <div className="main">
            <Header />
            <div className='ellipse'>
                <img src={ellipse} alt="ellipse" />
            </div>
            <StepProgressBar currentStep={2} />
            <div className='bcomet'>
                <img src={bcomet} alt="comet" />
            </div>

            <div className='cometEmo'>
                <img src={cometEmo} alt="comet" />
            </div>

            <div className='comet'>
                <img src={comet} alt="comet" />
            </div>

            <div className='comet1'>
                <img src={comet} alt="comet" />
            </div>

            <div className='orbit'>
                <img src={orbit} alt="orbit" />
            </div>

            <div className='scomet'>
                <img src={scomet} alt="comet" />
            </div>

            <div className="job-role-result">
                <h2>Job Role Result</h2>
                {jobRoleData ? (
                    <div>
                        <div className="user-info">
                            <h3 className='subHeading'>Candidate Name :</h3>
                            <p className='text-xl'>{jobRoleData.user}</p>
                        </div>
                        <div className="job-role">
                            <h3 className='subHeading' >Ideal Job Role :</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Job Role</th>
                                        <th>Job Openings</th>
                                        <th>Role-Specific Assessments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobRoleData && jobRoleData.ideal_job_role ? (
                                    jobRoleData.ideal_job_role.map((role, index) => (
                                        <tr key={index}>
                                            <td className='roles'>{role}</td>
                                            <td>
                                                <Link className="jobLink" to={`/job-openings/${encodeURIComponent(role)}`}>View Job Openings</Link>
                                            </td>
                                            <td>
                                                <Link className="assessmentLink" to={`/assessment/${encodeURIComponent(role)}`}>Check your skill level</Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">No job roles found.</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="advice">
                            <h3 className='subHeading' >Advice :</h3>
                            <p>{jobRoleData.advice}</p>
                        </div>
                    </div>
                ) : (
                    <p>No job role data available.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default JobRoleResult;