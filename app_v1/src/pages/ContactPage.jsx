// src/pages/ContactPage.jsx
import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ExtendedFooter from '../components/ExtendedFooter';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <main>
                <Contact />
            </main>
            <footer className="common-footer">
                <ExtendedFooter />
                <Footer />
            </footer>
        </div>
    );
}

export default ContactPage;