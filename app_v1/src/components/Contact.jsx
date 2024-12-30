// ./components/Contact.jsx

import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="recommended-case">
                <p>RECOMMENDED CASE</p>
                <div className="case-grid">
                    <div className="case-item">
                        <p>#신규사업론칭용캐릭터</p>
                        <img src="images/img_sample.png" alt="case1" />
                    </div>
                    <div className="case-item">
                        <p>#캐릭터리뉴얼</p>
                        <img src="images/img_sample.png" alt="case2" />
                    </div>
                    <div className="case-item">
                        <p>#캐릭터인형탈</p>
                        <img src="images/img_sample.png" alt="case3" />
                    </div>
                    <div className="case-item">
                        <p>#뉴미디어캐릭터콘텐츠</p>
                        <img src="images/img_sample.png" alt="case4" />
                    </div>
                    <div className="case-item">
                        <p>#캐릭터기획에서운영까지</p>
                        <img src="images/img_sample.png" alt="case5" />
                    </div>
                </div>
            </section>

            <section className="contact-info">
                <p>CONTACT</p>
                <div className="contact-container">
                    <div className="contact-image">
                        <img src="images/contact1.png" alt="contact-character" />
                    </div>
                    {/* <div className="contact-content">
                        <p>캐릭터 브랜드 제작 및 캐릭터를 활용한 모든 콘텐츠 작업이 가능합니다.</p>
                        <p>메일에 예산, 기간, 의뢰 품목, 레퍼런스(참고 이미지) 등을 기재해주시면 보다 구체적인 상담을 받으실 수 있습니다.</p>
                        <p>아래 메일주소로 문의사항을 남겨주시면 빠르게 답변 드리겠습니다.</p>
                        <p className="email">dorun_lab@naver.com</p>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Contact;