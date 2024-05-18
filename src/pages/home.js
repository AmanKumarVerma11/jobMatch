import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FileUploader from '../components/newUpload';

function Home() {
    return (
        <div className='main'>
            <Header />
            <FileUploader />
            <Footer />
        </div>
    );
}

export default Home;
