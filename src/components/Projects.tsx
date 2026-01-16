
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <FadeInSection>
                    <h2 style={{ marginBottom: '3rem' }}>Featured Projects</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '40px'
                    }}>
                        {userData.projects.map((project, idx) => (
                            <div key={idx} className="project-card" style={{
                                background: 'transparent',
                                border: '1px solid rgba(148, 163, 184, 0.1)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transition: '0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'relative'
                            }}>
                                {/* Decorative Gradient Bar */}
                                <div style={{ height: '6px', background: 'var(--gradient-text)', width: '100%' }}></div>

                                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f8fafc' }}>{project.title}</h3>

                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                        {project.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} style={{
                                                fontSize: '0.75rem',
                                                padding: '4px 10px',
                                                borderRadius: '4px',
                                                background: 'rgba(30, 41, 59, 0.5)',
                                                color: '#2dd4bf',
                                                border: '1px solid rgba(45, 212, 191, 0.1)',
                                                fontWeight: 500
                                            }}>{tech}</span>
                                        ))}
                                    </div>

                                    <a href={project.link.href} className="btn-link" style={{
                                        color: '#f1f5f9',
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        marginTop: 'auto',
                                        width: 'fit-content'
                                    }}>
                                        {project.link.label}
                                        <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.8rem', color: '#14b8a6' }}></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
            <style>{`
                .project-card:hover {
                    transform: translateY(-5px);
                    background: rgba(30, 41, 59, 0.4);
                    border-color: rgba(20, 184, 166, 0.3) !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
