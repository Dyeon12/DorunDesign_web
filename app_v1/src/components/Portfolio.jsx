import React, { useState } from 'react';
import './Portfolio.css';

const sections = [
    { name: 'ALL', content: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'] },
    { name: 'CHARACTER', content: ['item1', 'item2'] },
    { name: 'CI&BI', content: ['item3', 'item4'] },
    { name: 'PR DESIGN', content: ['item5', 'item6'] },
    { name: 'NEW MEDIA', content: ['item7', 'item8'] },
];

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('ALL');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const getContent = () => {
        const section = sections.find(sec => sec.name === activeSection);
        return section ? section.content : [];
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-nav-container">
                <nav className="portfolio-nav">
                    {sections.map((section, index) => (
                        <React.Fragment key={section.name}>
                            <button
                                onClick={() => handleSectionChange(section.name)}
                                className={activeSection === section.name ? 'active' : ''}
                            >
                                {section.name}
                            </button>
                            {index < sections.length - 1 && <span className="separator">|</span>}
                        </React.Fragment>
                    ))}
                </nav>
            </div>
                <div className="portfolio-grid">
                    {getContent().map((item, index) => (
                        <div key={index} className="portfolio-item">
                            {item}
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Portfolio;
