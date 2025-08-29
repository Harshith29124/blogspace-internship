import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ maxWidth: '800px' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold'
            }}>
              🚀
            </div>
            <h1 style={{ 
              fontSize: '48px', 
              margin: '0',
              background: 'linear-gradient(135deg, #fff 0%, #e8f2ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              BlogSpace
            </h1>
          </div>

          {/* Status */}
          <h2 style={{ 
            fontSize: '28px', 
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            Day 1: Project Setup Complete! ✅
          </h2>
          
          <p style={{ 
            fontSize: '18px', 
            opacity: 0.9, 
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            7-Day Web Development Internship Project<br/>
            Modern Blogging Platform with Authentication & Admin Panel
          </p>
          
          {/* Completion Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '32px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'left',
            marginBottom: '32px'
          }}>
            <h3 style={{ 
              marginBottom: '24px',
              fontSize: '24px',
              textAlign: 'center',
              color: '#00d4aa'
            }}>
              ✅ Day 1 Tasks Completed
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              fontSize: '16px'
            }}>
              <div>
                <div style={{ marginBottom: '8px' }}>✅ GitHub repository setup</div>
                <div style={{ marginBottom: '8px' }}>✅ Project folder structure</div>
                <div style={{ marginBottom: '8px' }}>✅ Node.js + Express backend</div>
                <div style={{ marginBottom: '8px' }}>✅ React frontend application</div>
              </div>
              <div>
                <div style={{ marginBottom: '8px' }}>✅ All dependencies installed</div>
                <div style={{ marginBottom: '8px' }}>✅ Environment configuration</div>
                <div style={{ marginBottom: '8px' }}>✅ README documentation</div>
                <div style={{ marginBottom: '8px' }}>✅ Git version control</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '24px',
            borderRadius: '16px',
            marginBottom: '32px',
            textAlign: 'left'
          }}>
            <h3 style={{ 
              marginBottom: '16px',
              textAlign: 'center',
              color: '#00d4aa'
            }}>
              🛠️ Tech Stack Ready
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              fontSize: '14px'
            }}>
              <div>
                <strong>Backend:</strong><br/>
                • Node.js + Express<br/>
                • MongoDB + Mongoose<br/>
                • JWT + bcryptjs<br/>
                • CORS + Helmet
              </div>
              <div>
                <strong>Frontend:</strong><br/>
                • React 18<br/>
                • React Router Dom<br/>
                • Axios + Toast<br/>
                • Lucide Icons
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div style={{
            background: 'linear-gradient(135deg, #00d4aa 0%, #00c49a 100%)',
            padding: '20px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>
              🎯 Next: Day 2 - Authentication System
            </h3>
            <p style={{ 
              margin: '0',
              fontSize: '14px',
              opacity: 0.9
            }}>
              User registration & login with JWT tokens, password encryption
            </p>
          </div>

          {/* Server Status */}
          <div style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '14px'
          }}>
            <div style={{
              background: 'rgba(0, 212, 170, 0.2)',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #00d4aa'
            }}>
              Backend: localhost:5000 ✅
            </div>
            <div style={{
              background: 'rgba(0, 212, 170, 0.2)',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #00d4aa'
            }}>
              Frontend: localhost:3000 ✅
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
