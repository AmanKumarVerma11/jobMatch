// JobOpenings.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/jobOpenings.css';
import JobCard from './jobCard.js';
import LoadingAnimation from './loadingAnimation.js';

const JobOpenings = () => {
    const { role } = useParams();
    const [jobOpenings, setJobOpenings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            try {
                setIsLoading(true); 

                const options = {
                    method: 'GET',
                    url: 'https://jobs-api14.p.rapidapi.com/list',
                    params: {
                        query: role,
                        location: 'India',
                        distance: '1.0',
                        language: 'en_GB',
                        remoteOnly: 'false',
                        datePosted: 'month',
                        employmentTypes: 'fulltime;parttime;intern',
                        index: '0'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'fa147c1a64mshf586cb7dc1294ddp15c160jsnde9a19aa343f',
                        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                console.log('Response data:', response.data);
                setJobOpenings(response.data);
            } catch (error) {
                console.error('Error fetching job openings:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobOpenings();
    }, [role]);


    return (
        <div className="main">
            <Header />
            <div className="job-openings">
                <h2>Job Openings for {role}</h2>
                {isLoading ? (
                    <LoadingAnimation />
                ) : jobOpenings.jobs && jobOpenings.jobs.length > 0 ? (
                    <ul>
                        {jobOpenings.jobs.map((job) => (
                            <JobCard
                                key={job.id}
                                title={job.title}
                                company={job.company}
                                datePosted={job.datePosted}
                                employmentType={job.employmentType}
                                jobProviders={job.jobProviders}
                                description={job.description}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>No job openings found.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default JobOpenings;
//     return (
//         <div className="main">
//             <Header />
//             <div className="job-openings">
//                 <h2>Job Openings for {role}</h2>
//                 {isLoading ? (
//     <p>Loading...</p>
// ) : jobOpenings.jobs && jobOpenings.jobs.length > 0 ? (
//     <ul>
//         {jobOpenings.jobs.map((job) => (
//             <li key={job.id}>
//                 <a href={job.url} target="_blank" rel="noopener noreferrer">
//                     {job.company} - {job.title}
//                 </a>
//                 <p>{job.description}</p>
//                 {/* Add any other relevant job details */}
//             </li>
//         ))}
//     </ul>
// ) : (
//     <p>No job openings found.</p>
// )}
//             </div>
//             <Footer />

//         </div>
//     );
// };

// export default JobOpenings;