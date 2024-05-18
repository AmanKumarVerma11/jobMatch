// // JobRoleResult.js
// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import '../styles/jobRoleResult.css';

// const JobRoleResult = () => {
//     const location = useLocation();
//     const jobRoleData = location.state?.jobRoleData;

//     return (
//         <div className="main">
//             <Header />
//             <div className="job-role-result">
//                 <h2>Job Role Result</h2>
//                 {jobRoleData ? (
//                     <div>
//                         <div className="user-info">
//                             <h3>Candidate Name</h3>
//                             <p>{jobRoleData.user}</p>
//                         </div>
//                         <div className="job-role">
//                             <h3>Ideal Job Role</h3>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Job Role</th>
//                                         <th>Job Openings</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {jobRoleData.ideal_job_role.map((role, index) => (
//                                         <tr key={index}>
//                                             <td>{role}</td>
//                                             <td>
//                                                 <Link to={`/job-openings/${encodeURIComponent(role)}`}>View Job Openings</Link>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="advice">
//                             <h3>Advice</h3>
//                             <p>{jobRoleData.advice}</p>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No job role data available.</p>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default JobRoleResult;

// JobRoleResult.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/jobRoleResult.css';

const JobRoleResult = () => {
    const location = useLocation();
    const jobRoleData = location.state?.jobRoleData;

    return (
        <div className="main">
            <Header />
            <div className="job-role-result">
                <h2>Job Role Result</h2>
                {jobRoleData ? (
                    <div>
                        <div className="user-info">
                            <h3>Candidate Name</h3>
                            <p>{jobRoleData.user}</p>
                        </div>
                        <div className="job-role">
                            <h3>Ideal Job Role</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Job Role</th>
                                        <th>Job Openings</th>
                                        <th>Role-Specific Assessments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobRoleData.ideal_job_role.map((role, index) => (
                                        <tr key={index}>
                                            <td>{role}</td>
                                            <td>
                                                <Link to={`/job-openings/${encodeURIComponent(role)}`}>View Job Openings</Link>
                                            </td>
                                            <td>
                                                {/* Replace the link below with the actual assessment link for the specific job role */}
                                                {/* <a href="https://mcqmate.com/topic/machine-learning/quiz" target="_blank" rel="noopener noreferrer">Take Assessment</a> */}
                                                <Link to={`/assessment/${encodeURIComponent(role)}`}>Take your Assessment</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="advice">
                            <h3>Advice</h3>
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