import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/about.css';

const About = () => {
    return (
        <>
        <Header />
        <div className="about-page">
            <section className="about-content">
                <h1>About Job Ready</h1>
                <p>
                    Job Ready is a comprehensive platform dedicated to empowering individuals and helping them achieve their career goals. Our mission is to bridge the gap between job seekers and employers, providing a seamless experience for both parties.
                </p>
                <h2>Our Vision</h2>
                <p>
                    We envision a world where finding the right job is no longer a daunting task. At Job Ready, we strive to create an ecosystem that fosters professional growth, skill development, and meaningful connections between talented individuals and their dream employers.
                </p>
                <h2>Our Services</h2>
                <ul>
                    <li>
                        <strong>Job Search:</strong> Explore a vast collection of job opportunities across various industries and locations, tailored to your preferences and qualifications.
                    </li>
                    <li>
                        <strong>Career Assessments:</strong> Take our comprehensive career assessments to gain valuable insights into your strengths, interests, and potential career paths.
                    </li>
                    <li>
                        <strong>Resume Building:</strong> Leverage our powerful resume builder tool to create a compelling and professional resume that showcases your skills and achievements.
                    </li>
                    <li>
                        <strong>Interview Preparation:</strong> Access our extensive library of interview tips, mock interviews, and personalized feedback to help you ace your upcoming interviews.
                    </li>
                </ul>
                <h2>Join Our Community</h2>
                <p>
                    At Job Ready, we foster a vibrant community of professionals, experts, and career advisors who are dedicated to supporting your career journey. Connect with like-minded individuals, share experiences, and gain invaluable insights from industry leaders.
                </p>
            </section> 
        </div>
        <Footer />
        </>
    );
};

export default About;