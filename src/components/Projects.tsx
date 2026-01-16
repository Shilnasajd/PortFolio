
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
                        gap: '30px'
                    }}>
                        {userData.projects.map((project, idx) => (
                            <div key={idx} className="project-card" style={{
                                background: 'rgba(23, 23, 23, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                transition: '0.3s'
                            }}>
                                <div style={{ padding: '25px' }}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div style={{ margin: '15px 0' }}>
                                        {project.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} className="badge">{tech}</span>
                                        ))}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                        paddingTop: '20px',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <a href={project.link.href} className="btn-link" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
                                            {project.link.label} <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
            <style>{`
                .project-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
};

export default Projects;
