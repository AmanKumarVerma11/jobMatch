// Import necessary dependencies
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// Define the component
const FileUploader = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the uploaded file
    const file = acceptedFiles[0];
    onFileUpload(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'application/pdf' });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the PDF file here</p> : <p>Drag 'n' drop a PDF file here, or click to select one</p>}
    </div>
  );
};

// Define dropzone styles
const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

// Example usage in another component
const uploadPdf = () => {
  const handleFileUpload = (file) => {
    // Handle the file upload, for example, send it to a server or process it in some way
    console.log('File uploaded:', file);
  };

  return (
    <div>
      <h2>PDF File Upload</h2>
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  );
};
export default uploadPdf;
// export default uploadPdf;
