import React from 'react';

const Success = () => {
    return (
        <div className="multi-step-form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#d1fae5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth={2} style={{ width: '40px', height: '40px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>Application Submitted</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                Thank you! We have received your details and will process your application shortly.
            </p>
        </div>
    );
};

export default Success;
