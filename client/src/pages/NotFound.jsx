import React from 'react';

function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
                color: '#333',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative background circles */}
            <div
                style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(0,116,217,0.08)',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '-120px',
                    right: '-120px',
                    width: '350px',
                    height: '350px',
                    background: 'rgba(0,116,217,0.12)',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    padding: '48px 32px',
                    border: '2px solid #0074D9',
                    borderRadius: '16px',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 1,
                }}
            >
                <h1 style={{ fontSize: '6rem', margin: 0, fontWeight: 'bold', color: '#0074D9' }}>404</h1>
                <h2 style={{ fontSize: '1.5rem', margin: '16px 0 8px 0', color: '#0074D9' }}>Page Not Found</h2>
                <p style={{ fontSize: '1rem', color: '#666' }}>
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default NotFound;