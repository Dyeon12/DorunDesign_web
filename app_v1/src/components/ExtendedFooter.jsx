// src/components/ExtendedFooter.jsx
import React from 'react';
import './ExtendedFooter.css';

const ExtendedFooter = () => {
    return (
        <footer className="extended-footer">
            <div className="regi-container">
                <p>DORUN DESIGN</p>
                <div className="sns-logos">
                    <img src="./images/blog_logo.png" alt="naver-blog" />
                    <img src="./images/insta_logo.png" alt="instagram" />
                    <img src="./images/fb_logo.png" alt="facebook" />
                    <img src="./images/yb_logo.png" alt="youtube" />
                </div>
                <hr />
                <div className="info-container">
                    <p>두런디자인</p>
                    <div className="info-row">
                        <p>사업자등록번호 359-20-00763 | <button>사업자등록증 다운로드</button></p>
                    </div>
                    <div className="info-row">
                        <p>경기도 성남시 분당구 판교역로 192번길 16 8층 806호 D126(삼평동, 판교역로)</p>
                        <img src="./images/kidp.jpg" alt="kidp-logo" className="kidp-logo" />
                    </div>
                    <br />
                    <p>© 2018-2024 Dorun Design</p>
                </div>
            </div>
        </footer>
    );
};

export default ExtendedFooter;
