import React, { useState, useEffect } from 'react';
import './App.css';
import './components/styles.css';
import FunctionsSection from './components/FunctionsSection';
import SlopeSection from './components/SlopeSection';
import DerivativesSection from './components/DerivativesSection';
import DiffRulesSection from './components/DiffRulesSection';
import IntegralsSection from './components/IntegralsSection';

function App() {
  const [dark, setDark] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [topic, setTopic] = useState('functions');
  
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);
  
  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 24 }}>
      <header style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1>Calculus Visual Learning</h1>
          <div className="topic-tabs">
            <button 
              className={topic === 'functions' ? 'active' : ''} 
              onClick={() => setTopic('functions')}
            >
              Functions
            </button>
            <button 
              className={topic === 'slope' ? 'active' : ''} 
              onClick={() => setTopic('slope')}
            >
              Slope
            </button>
            <button 
              className={topic === 'derivatives' ? 'active' : ''} 
              onClick={() => setTopic('derivatives')}
            >
              Derivatives
            </button>
            <button 
              className={topic === 'rules' ? 'active' : ''} 
              onClick={() => setTopic('rules')}
            >
              Diff Rules
            </button>
            <button 
              className={topic === 'integrals' ? 'active' : ''} 
              onClick={() => setTopic('integrals')}
            >
              Integrals
            </button>
          </div>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: '6px 16px', fontSize: 16 }}>
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      
      <main className="topic-section">
        {topic === 'functions' && <FunctionsSection />}
        {topic === 'slope' && <SlopeSection />}
        {topic === 'derivatives' && <DerivativesSection />}
        {topic === 'rules' && <DiffRulesSection />}
        {topic === 'integrals' && <IntegralsSection />}
      </main>
    </div>
  );
}

export default App;
