
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const Hero = () => {
    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                opacity: 0.4,
                filter: 'blur(80px)',
                zIndex: 1,
                animation: 'pulse 10s infinite alternate'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <FadeInSection>
                    <span style={{ color: '#14b8a6', fontWeight: 600, marginBottom: '1rem', display: 'block', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Hello, I'm {userData.name}
                    </span>
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        Designing the Future of <br /> <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligent Systems</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', maxWidth: '600px', marginBottom: '2rem' }}>
                        {userData.summary}
                    </p>
                    <div>
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        {/* 
                        <a href={userData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '15px' }}>
                            <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Resume
                        </a> 
                        */}
                    </div>
                </FadeInSection>
            </div>

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.4; }
                    100% { transform: scale(1.2); opacity: 0.2; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
