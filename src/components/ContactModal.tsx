
import { useState } from 'react';
import ReactDOM from 'react-dom';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    if (!isOpen) return null;

    const [formState, setFormState] = useState({
        "entry.1173627639": '', // Name
        "entry.1885518774": '', // Email
        "entry.1399685950": ''  // Message
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfK2sp0Mo3cnMMNp_zvCURfe2omnZmP2laWHnT3OQV0ZlWU8A/formResponse";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("entry.1173627639", formState["entry.1173627639"]);
        formData.append("entry.1885518774", formState["entry.1885518774"]);
        formData.append("entry.1399685950", formState["entry.1399685950"]);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                body: formData,
                mode: "no-cors"
            });
            setIsSuccess(true);
            setFormState({
                "entry.1173627639": '',
                "entry.1885518774": '',
                "entry.1399685950": ''
            });
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleClose = () => {
        setIsSuccess(false);
        onClose();
    };

    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
        }} onClick={handleClose}>
            <div style={{
                backgroundColor: '#171717',
                padding: '40px',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} onClick={(e) => e.stopPropagation()}>

                <button onClick={handleClose} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: '#a3a3a3',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}>
                    <i className="fas fa-times"></i>
                </button>

                {isSuccess ? (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{
                            width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.2)',
                            borderRadius: '50%', color: '#3b82f6', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                            margin: '0 auto 20px'
                        }}>
                            <i className="fas fa-check"></i>
                        </div>
                        <h3 style={{ marginBottom: '10px', color: 'white' }}>Message Sent!</h3>
                        <p style={{ color: '#a3a3a3' }}>Thanks for reaching out. I'll get back to you soon.</p>
                        <button onClick={handleClose} className="btn btn-primary" style={{ marginTop: '20px' }}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 style={{ marginBottom: '1.5rem', color: 'white', textAlign: 'center' }}>Send Message</h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#a3a3a3', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="entry.1173627639"
                                    required
                                    value={formState["entry.1173627639"]}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'white',
                                        outline: 'none',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#a3a3a3', fontSize: '0.9rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="entry.1885518774"
                                    required
                                    value={formState["entry.1885518774"]}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'white',
                                        outline: 'none',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#a3a3a3', fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    name="entry.1399685950"
                                    required
                                    rows={4}
                                    value={formState["entry.1399685950"]}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'white',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ marginTop: '10px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
