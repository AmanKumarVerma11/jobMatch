import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/newUpload.css";
import StepProgressBar from './stepProgressBar';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const navigate = useNavigate();
    

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setUploadedFileName(e.target.files[0].name);
    };

    const handleFileUpload = () => {
        setLoading(true); 

        const formData = new FormData();
        formData.append('file', file);
        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                navigate('/job-role-result', { state: { jobRoleData: result } });
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    return (
        <div className="container">
            <h1>Welcome, to Job<span className='match' >Match</span></h1>
            <p className="sub">Upload your resume here to get started</p>
            <StepProgressBar currentStep={1} />
            <div className="file-uploader">
            <div className="file-uploader__area">
                <label htmlFor="file-input" className="file-uploader__label">
                    <span className="file-uploader__icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
                        </svg>
                    </span>
                </label>
                <input
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                    className="file-uploader__input-field"
                />
            </div>
            {uploadedFileName && <p className="file-uploader__file-name">*{uploadedFileName}</p>}
            <button
                onClick={handleFileUpload}
                disabled={!file || loading}
                className="file-uploader__button"
            >
                {loading ? <div className="loader"></div> : 'Upload'}
            </button>
        </div>
        </div>
    );
};

export default FileUploader;