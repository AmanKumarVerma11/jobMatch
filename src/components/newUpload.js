import React, { useState } from 'react';
import "../styles/form.css"

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        setLoading(true); // Set loading to true when upload starts

        const formData = new FormData();
        formData.append('file', file);
        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when upload completes (regardless of success or failure)
            });
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload} disabled={!file || loading}>
                {loading ? <div className="loader"></div> : 'Upload'}
            </button>
        </div>
    );
};

export default FileUploader;
