// JobCard.js
import React, { useState } from 'react';
import '../styles/jobOpenings.css';

const JobCard = ({ title, company, datePosted, employmentType, jobProviders, description }) => {
    const [showDetails, setShowDetails] = useState(false);
    const cleanDescription = description.replace(/\n\n/g, ' ');
    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleHideDetails = () => {
        setShowDetails(false);
    };

    return (
        <>
            <li className="job-card" onClick={handleShowDetails}>
                <div className="job-card-content">
                    <h3>{title}</h3>
                    <p className='companyName'>
                        {company}
                    </p>
                    <p>Date Posted: {datePosted}</p>
                    <p>Employment Type: {employmentType}</p>
                </div>
            </li>
            {showDetails && (
                <>
                    <div className="job-details-overlay" onClick={handleHideDetails}></div>
                    <div className="job-details">
                        <p className="companyName">Job Description</p>
                        <p>{cleanDescription}</p>
                        <h4 className='companyName' >Job Providers:</h4>
                        <ul>
                            {jobProviders.map((provider, index) => (
                                <li key={index}>
                                    <a href={provider.url} target="_blank" rel="noopener noreferrer">
                                        {provider.jobProvider}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default JobCard;