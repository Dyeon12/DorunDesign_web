import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [clickCount, setClickCount] = useState(0);

    const projects = {
        2024: `• 청렴캐릭터 ‘청빛누리’ 리뉴얼 | 강동송파교육지원청 
        • 청렴캐릭터 ‘푸르미 & 바르미’ | 경남창녕교육지원청
        • 번콩클럽 친구들 | 두런디자인
        • 청렴캐릭터 ‘통영프렌즈’ | 경남통영교육지원청`,
        2023: `• 아동미술교육 캐릭터 ‘퀴리’ | 다담교육
        • KAVA 조앤 신규 일러스트 & 버스랩핑 | 한국폭력학대예방협회
        • 청렴캐릭터 ‘미리’ 추가 개발 | 경남창원교육지원청
        • 마스코트 ‘낭만교양이’ 리뉴얼 | 무형서재
        • 곰곡홍유릉 상점가 캐릭터 ‘금홍이’ | 금곡홍유릉 상인회
        • KAVA AI 스피커 캐릭터 ‘조앤’ 리뉴얼 | 한국폭력학대예방협회
        • 청렴캐릭터 ‘청바기’ 추가 개발 | 경남함안교육지원청
        • 실용전문학교 캐릭터 ‘호저니’  | 한국호텔 실용전문학교
        • 제과브랜드 이벤트 캐릭터 | 디옵트`,
        2022: `• 청렴캐릭터 ‘미리’ 리뉴얼 | 경남창원교육지원청
        • 이벤트 카페 캐릭터 ‘꼬미와 친구들’ | 샤인당
        • 관광브랜드 캐릭터 ‘제주가이들’ | SLS & 제주꾼
        • AI 캐릭터 ‘장량과 친구들’ 리뉴얼 | 애너봇`,
        2021: `•게임 원작 MD 캐릭터 ‘에이션트 애로우’ | 일이육
        • 베이커리카페 ‘브레드보드 프렌즈’ | 브레드보드
        • 청렴캐릭터 ‘청바기’ 리뉴얼 | 경남함안교육지원청 
        • 헤어샵 브랜드 캐릭터 ‘이요와 유기요’ | 26도 헤어공감하우스 
        • 자연공유 패밀리 캐릭터 ‘쫀득이’ | 이지텍
        • 친환경 캐릭터 ‘HEM’ | 벤텍스`,
        2020: `• 한국산업안전기술원 캠페인 캐릭터| 동진문화사
        • 군산수산물종합센터 캐릭터 ‘대박이’ | 군산수산물종합센터 상인회
        • 스터디카페 BI ‘단향’ | 돌쇠
        • VR 게임 ‘VR 한자 마스터’ | 엔스피릿
        • AI 캐릭터 ‘장량과 친구들’ | 애너봇`,
        2019:`• 아트플로어 캐릭터 ‘단군’ | 줌톤
        • 마라탕 프랜차이즈 캐릭터 ‘황비홍’ | 황비홍마라탕`,
        2018: `• 두런디자인연구소 설립
        • 사회서비스캐릭터 공모전 ‘누리와 누미’ 수상 | 보건복지부
        • 이모티콘 캐릭터 ‘소떡소떡’ | 플레이큐브`,
    };

    const handleClick = (year) => {
        if (selectedYear === year) {
            setClickCount(clickCount + 1);
        } else {
            setSelectedYear(year);
            setClickCount(1); // 새 년도를 클릭하면 클릭 횟수를 초기화
        }

        if (clickCount === 1 && selectedYear === year) {
            setSelectedYear(null); // 두 번째 클릭 시 말풍선 숨김
            setClickCount(0); // 클릭 횟수 초기화
        }

        // 클릭 후 1초 내에 두 번 클릭하지 않으면 클릭 횟수 초기화
        setTimeout(() => {
            setClickCount(0);
        }, 1000);
    };

    return (
        <section className="projects">
            <h2>OUR LAST PROJECT</h2>
            <div className="timeline">
                {Object.keys(projects)
                    .sort((a, b) => b - a)
                    .map((year) => (
                        <div
                            key={year}
                            className={`year ${selectedYear === year ? 'active' : ''}`}
                            onClick={() => handleClick(year)}
                        >
                            {year}
                            <br />
                        </div>
                    ))}
            </div>
            <div className="project-container">
                {selectedYear && (
                    <div className="project-bubble">
                        {projects[selectedYear]}
                        <div className="bubble-tail"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;