import React from 'react';

const Motivation = () => {
    return (
        <div className="page-container" style={{ textAlign: 'center' }}>
            <h2>My Achievements 🏆</h2>

            <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
                <div style={{ width: '100px', height: '100px', background: 'var(--color-secondary)', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                    🚀
                </div>
                <h3>Level 5 Explorer</h3>
                <p style={{ color: 'var(--text-secondary)' }}>You earned 500 XP this week!</p>

                <div style={{ height: '12px', background: '#F3F4F6', borderRadius: '100px', marginTop: '16px', overflow: 'hidden' }}>
                    <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #FFB347, #FF6B6B)' }}></div>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', display: 'block' }}>200 XP to next level</span>
            </div>

            <h3 style={{ marginTop: '24px', textAlign: 'left' }}>Badges</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
                {[1, 2, 3].map(i => (
                    <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: 'var(--shadow-soft)' }}>
                        <div style={{ width: '40px', height: '40px', background: '#E0F2FE', borderRadius: '50%', margin: '0 auto 8px' }}></div>
                        <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Star Reader</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Motivation;
