
import { userData } from '../data';
import { FadeInSection } from './FadeIn';

const Hero = () => {
    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* New Background: Abstract shapes instead of single pulse */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 60%)',
                filter: 'blur(60px)',
                zIndex: 1,
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 60%)',
                filter: 'blur(60px)',
                zIndex: 1,
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px' }}>
                <FadeInSection>
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        background: 'rgba(20, 184, 166, 0.1)',
                        border: '1px solid rgba(20, 184, 166, 0.2)',
                        marginBottom: '1.5rem',
                        backdropFilter: 'blur(5px)'
                    }}>
                        <span style={{ color: '#14b8a6', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.9rem' }}>
                            HELLO, I'M {userData.name}
                        </span>
                    </div>

                    <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Designing the Future of <br />
                        <span style={{
                            background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Intelligent Systems
                        </span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
                        {userData.summary}
                    </p>

                    <div
                        className="hero-buttons"
                        style={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a
                            href={userData.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
                            Resume
                        </a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>

                </FadeInSection>
            </div>
        </section>
    );
};

export default Hero;
