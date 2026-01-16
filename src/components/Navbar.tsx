
import { useState, useEffect } from 'react';
import { userData } from '../data';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0.7)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    };

    return (
        <nav style={{ ...navStyles, position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: 'all 0.3s ease' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', zIndex: 1001 }}>{userData.initials}.</a>

                {/* Desktop Menu */}
                <ul className="nav-links" style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <li key={item} className="desktop-only">
                            <a href={`#${item.toLowerCase()}`} style={{ color: '#fff', opacity: 0.8 }} className="hover:text-blue-500">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    className="mobile-only"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 1001
                    }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(10, 10, 10, 0.98)',
                display: mobileMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                transition: 'opacity 0.3s ease'
            }}>
                <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0 }}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <li key={item} style={{ marginBottom: '2rem' }}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                style={{ color: '#fff', fontSize: '2rem', fontWeight: 600 }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                    .mobile-only { display: block !important; }
                }
                @media (min-width: 769px) {
                     .desktop-only { display: block; }
                     .mobile-only { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
