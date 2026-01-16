
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const Skills = () => {
    // Helper to map skill names to icons (simple mapping for now)
    const getIcon = (skill: string) => {
        const lower = skill.toLowerCase();
        if (lower.includes('react')) return 'fab fa-react';
        if (lower.includes('js') || lower.includes('script')) return 'fab fa-js';
        if (lower.includes('node')) return 'fab fa-node';
        if (lower.includes('python')) return 'fab fa-python';
        if (lower.includes('database') || lower.includes('sql') || lower.includes('mongo')) return 'fas fa-database';
        if (lower.includes('docker')) return 'fab fa-docker';
        if (lower.includes('aws') || lower.includes('cloud')) return 'fas fa-cloud';
        if (lower.includes('git')) return 'fab fa-git-alt';
        if (lower.includes('css') || lower.includes('tailwind')) return 'fab fa-css3-alt';
        return 'fas fa-code';
    };

    const getColor = (skill: string) => {
        const lower = skill.toLowerCase();
        if (lower.includes('react')) return '#61dafb';
        if (lower.includes('js')) return '#f7df1e';
        if (lower.includes('node')) return '#339933';
        if (lower.includes('python')) return '#3776ab';
        if (lower.includes('mongo')) return '#4db33d';
        if (lower.includes('docker')) return '#2496ed';
        if (lower.includes('aws')) return '#ff9900';
        return '#ffffff';
    }

    return (
        <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <FadeInSection>
                    <h2 style={{ textAlign: 'center' }}>Skills & Expertise</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                        gap: '20px',
                        marginTop: '3rem'
                    }}>
                        {userData.skills.map((skill, idx) => (
                            <div key={idx} className="skill-card" style={{
                                background: 'rgba(23, 23, 23, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '20px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                transition: '0.3s'
                            }}>
                                <i className={getIcon(skill)} style={{ fontSize: '2rem', marginBottom: '10px', color: getColor(skill) }}></i>
                                <h4>{skill}</h4>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>

            <style>{`
                .skill-card:hover {
                    border-color: #3b82f6 !important;
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
};

export default Skills;
