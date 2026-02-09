import React from 'react';
import { Camera, Image, Mic } from 'lucide-react';

const Skills = () => {
    return (
        <div className="page-container">
            <h2>My Portfolio 🌟</h2>

            <div className="card" style={{ textAlign: 'center', marginBottom: '24px', padding: '32px' }}>
                <div style={{ background: '#E0F2FE', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Camera size={40} color="var(--color-primary)" />
                </div>
                <h3>Add Evidence</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Take a photo or record your latest project!</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                    Upload Now
                </button>
            </div>

            <h3>Recent Uploads</h3>
            <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#eee', borderRadius: '8px' }}></div>
                    <div>
                        <h4 style={{ margin: 0 }}>Clay Model</h4>
                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>Today</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
