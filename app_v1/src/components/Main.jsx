// src/components/Main.jsx
import React from 'react';
import './Main.css';
import Projects from './projects';

const Main = () => {
    return (
        <main className="main-content">
            <section className="intro-img">
                <div className="intro-content">
                    <img src="images/intro-img.png" alt="intro.img" />
                    {/* <img src = "images/main.png" alt = "main" />     */}
                </div>
            </section>
            <section className="intro">
                <h2>We make your imagination a reality</h2>
                <p>
                    <br />
                    상상을 현실로 만드는 캐릭터 전문 스튜디오 두런디자인입니다. <br />
                    두런디자인은 시각적으로만 귀여운 캐릭터가 아닌 <br />
                    잘 활용되고 소통하는 생명력을 가진 캐릭터를 만들고 있습니다. <br />
                    인기 드라마와 교육기관 브랜드 캐릭터 등 민간 브랜드 캐릭터부터 <br />
                    공공기관 캐릭터까지 다수의 캐릭터 프로젝트를 성공적으로 수행한 <br />
                    검증된 캐릭터 전문 두런디자인을 만나보세요.     <br />
                    <br />
                </p>
            </section>
            <section  className="block-content">
                <div className="block-container">
                    <div className="block">
                        <h3>생각의 동기화</h3>
                        <hr />
                        <p>의뢰인과 생각의 동기화를 <br />
                            통해 만든 주요 키워드로 구성된 <br /> 
                            마인드맵을 활용한 디자인 </p>
                    </div>
                    <div className="block">
                        <h3>마케팅 맞춤형 디자인</h3>
                        <hr />
                        <p>캐릭터 제작 후 홍보 및 마케팅 <br />
                            목적에 부합하도록 기획하고 <br />
                            제작하는 맞춤형 디자인</p>
                    </div>
                    <div className="block">
                        <h3>트렌드 반영 디자인</h3>
                        <hr />
                        <p>캐릭터 뉴스 코레아이션으로 <br /> 꾸준히 연구된 업계 동향과 <br/>트렌드가 반영된 디자인</p>
                    </div>
                </div>
            </section>    
            <section className="projects">
                <Projects />
            </section>
            <section className="download">
                <button>두런디자인 포트폴리오 PDF 다운로드</button>
            </section>
            <section className="clients">
                <h2>OUR CLIENTS</h2>
                <div className="logos-container">
                    {/* <img src="logo1.png" alt="Client 1" />
                    <img src="logo2.png" alt="Client 2" />
                    <img src="logo3.png" alt="Client 3" />
                    <img src="logo4.png" alt="Client 4" />
                    <img src="logo5.png" alt="Client 5" />
                    <br />
                    <img src="logo6.png" alt="Client 6" />
                    <img src="logo7.png" alt="Client 7" />
                    <img src="logo8.png" alt="Client 8" />
                    <img src="logo9.png" alt="Client 9" />
                    <img src="logo10.png" alt="Client 10" /> */}
                </div>
            </section>
        </main>
    );
};

export default Main;
