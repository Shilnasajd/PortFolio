
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'transparent' }}>
            <div className="container">
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>Skills & Expertise</h2>
                        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
                            A comprehensive toolkit for building modern, scalable AI and Web solutions.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '15px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {userData.skills.map((skill, idx) => (
                            <div key={idx} className="skill-pill" style={{
                                padding: '12px 24px',
                                background: 'rgba(30, 41, 59, 0.6)',
                                border: '1px solid rgba(148, 163, 184, 0.1)',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                color: '#f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}>
                                <span style={{ color: '#14b8a6' }}>#</span> {skill}
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>

            <style>{`
                .skill-pill:hover {
                    background: rgba(20, 184, 166, 0.15) !important;
                    border-color: #14b8a6 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.1);
                }
            `}</style>
        </section>
    );
};

export default Skills;
