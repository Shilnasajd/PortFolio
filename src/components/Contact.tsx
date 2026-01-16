import { useState } from 'react';
import { userData } from '../data';
import { FadeInSection } from './FadeIn';
import ContactModal from './ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="section">
            <div className="container">
                <FadeInSection>
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <h2>Get In Touch</h2>
                        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.</p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary"
                            style={{ fontSize: '1.25rem', padding: '15px 30px', border: 'none' }}
                        >
                            Say Hello
                        </button>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                            {userData.contact.social.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'rgba(23, 23, 23, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    color: 'white',
                                    transition: '0.3s'
                                }}>
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>

                        <footer style={{ marginTop: '50px', color: '#a3a3a3', fontSize: '0.875rem' }}>
                            <p>&copy; {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
                        </footer>
                    </div>
                </FadeInSection>
            </div>
            <style>{`
                .social-icon:hover {
                    background: #3b82f6 !important;
                    color: white !important;
                }
            `}</style>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Contact;
