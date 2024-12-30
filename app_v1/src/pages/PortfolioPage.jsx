// src/pages/PortfolioPage.jsx
import React from 'react';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ExtendedFooter from '../components/ExtendedFooter';

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <main>
                <Portfolio />
            </main>
            <footer className="common-footer">
                <ExtendedFooter />
                <Footer />
            </footer>
        </div>
    );
};

export default PortfolioPage;
