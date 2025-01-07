// filepath: /C:/Users/akver/Desktop/jobMatch/client/src/pages/contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        emailjs.sendForm('service_2244k7k', 'template_cc6tijq', e.target, 'qEsmDkbJBqh78LvvW')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                // Handle success (e.g., show a success message)
            }, (error) => {
                console.error('Error sending email:', error.text);
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <>
            <Header />
            <div className="contact-page">
                <section className="contact-section">
                    <h1>Contact Us</h1>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;