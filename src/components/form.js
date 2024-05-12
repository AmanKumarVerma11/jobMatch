import React, { useState } from 'react';
import '../styles/form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [skills, setSkills] = useState('');
    const [education, setEducation] = useState('');
    const [projects, setProjects] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [trainingCourses, setTrainingCourses] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSkillsChange = (e) => {
        setSkills(e.target.value);
    };

    const handleEducationChange = (e) => {
        setEducation(e.target.value);
    };

    const handleProjectsChange = (e) => {
        setProjects(e.target.value);
    };

    const handleWorkExperienceChange = (e) => {
        setWorkExperience(e.target.value);
    };

    const handleTrainingCoursesChange = (e) => {
        setTrainingCourses(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <div className='container'>
                <div className='upload-area' >
                    {/* <FileUploader/> */}
                </div>
            </div>
            <hr />
            <form className='form-container' onSubmit={handleSubmit}>
                <label className='form-input-label'>
                    Name:
                    <input className='form-input' type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Email:
                    <input className='form-input' type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Skills:
                    <textarea className='form-input' value={skills} onChange={handleSkillsChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Education:
                    <textarea className='form-input' value={education} onChange={handleEducationChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Projects:
                    <textarea className='form-input' value={projects} onChange={handleProjectsChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Work Experience:
                    <textarea className='form-input' value={workExperience} onChange={handleWorkExperienceChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Training/Courses:
                    <textarea className='form-input' value={trainingCourses} onChange={handleTrainingCoursesChange} />
                </label>
                <br />
                <button className='form-button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
