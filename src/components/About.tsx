
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                    {/* About & Education */}
                    <div>
                        <FadeInSection>
                            <h2>About Me</h2>
                            <p>{userData.about}</p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Education</h3>
                            <div className="timeline">
                                {userData.education.map((edu, idx) => (
                                    <div key={idx} style={{
                                        position: 'relative',
                                        paddingLeft: '30px',
                                        marginBottom: '40px',
                                        borderLeft: '2px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{
                                            position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px',
                                            borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                                        }}></div>
                                        <span style={{ fontSize: '0.875rem', color: '#a3a3a3', display: 'block', marginBottom: '0.5rem' }}>
                                            {edu.start} - {edu.end}
                                        </span>
                                        <h4>{edu.degree}</h4>
                                        <p style={{ marginBottom: 0 }}>{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Experience */}
                    <div>
                        <FadeInSection>
                            <h2>Experience</h2>
                            <div>
                                {userData.work.map((job, idx) => (
                                    <div key={idx} style={{
                                        position: 'relative',
                                        paddingLeft: '30px',
                                        marginBottom: '40px',
                                        borderLeft: '2px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{
                                            position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px',
                                            borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                                        }}></div>
                                        <span style={{ fontSize: '0.875rem', color: '#a3a3a3', display: 'block', marginBottom: '0.5rem' }}>
                                            {job.start} - {job.end}
                                        </span>
                                        <h4>{job.title}</h4>
                                        <p style={{ color: '#3b82f6', fontSize: '0.9rem' }}>{job.company}</p>
                                        <p>{job.description}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {job.badges.map((badge, bIdx) => (
                                                <span key={bIdx} className="badge">{badge}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
