// JobOpenings.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/jobOpenings.css';

const JobOpenings = () => {
    const { role } = useParams();
    const [jobOpenings, setJobOpenings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            try {
                setIsLoading(true); // Set loading state to true before fetching data

                const options = {
                    method: 'GET',
                    url: 'https://jobs-api14.p.rapidapi.com/list',
                    params: {
                        query: role,
                        location: 'United States',
                        distance: '1.0',
                        language: 'en_GB',
                        remoteOnly: 'false',
                        datePosted: 'month',
                        employmentTypes: 'fulltime;parttime;intern;contractor',
                        index: '0'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'e16bbc86demsh025ea915c601b90p166e82jsnda022a5a6d19',
                        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                console.log('Response data:', response.data);
                setJobOpenings(response.data);
            } catch (error) {
                console.error('Error fetching job openings:', error);
            } finally {
                setIsLoading(false); // Set loading state to false after fetching data
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
    <p>Loading...</p>
) : jobOpenings.jobs && jobOpenings.jobs.length > 0 ? (
    <ul>
        {jobOpenings.jobs.map((job) => (
            <li key={job.id}>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.company} - {job.title}
                </a>
                <p>{job.description}</p>
                {/* Add any other relevant job details */}
            </li>
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