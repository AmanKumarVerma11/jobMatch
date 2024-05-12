import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FileUploader from '../components/newUpload';

function Home() {
    return (
        <div>
            <Header />
            <FileUploader />
            <Footer />
        </div>
    );
}

export default Home;
