import React, { useState, useEffect } from 'react';
import './App.css';
import DerivativeVisualizer from './pages/DerivativeVisualizer';
import FunctionVisualizer from './pages/FunctionVisualizer';
import SlopeVisualizer from './pages/SlopeVisualizer';
import DiffRulesVisualizer from './pages/DiffRulesVisualizer';
import ApplicationsVisualizer from './pages/ApplicationsVisualizer';
import IntegralVisualizer from './pages/IntegralVisualizer';

function FunctionsSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <h2>What is a Function?</h2>
      <h3>For Beginners</h3>
      <p>A <b>function</b> is a rule that assigns to each input exactly one output. For example, f(x) = 2x + 1 is a function that doubles x and adds 1.</p>
      <ul>
        <li>Functions can be linear (straight line), quadratic (parabola), cubic, and more.</li>
        <li>Try plugging in different values for x to see how the output changes.</li>
      </ul>
      <p><i>Level up tip: Understand how to read and write function notation. Try creating your own simple rules!</i></p>
      <FunctionVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Explore how functions can describe complex relationships, like population growth or oscillations. Investigate domain, range, and how transformations (shifts, stretches) affect graphs.</p>
    </section>
  );
}

function SlopeSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <h2>Slope & Rate of Change</h2>
      <h3>For Beginners</h3>
      <p>The <b>slope</b> of a function at a point tells you how steep the graph is at that point. For straight lines, the slope is constant. For curves, it changes at every x.</p>
      <ul>
        <li>Slope = rise over run = change in y / change in x</li>
        <li>For f(x) = 2x + 1, the slope is 2 everywhere.</li>
      </ul>
      <p><i>Level up tip: Try drawing secant and tangent lines to see how slope changes!</i></p>
      <SlopeVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Analyze instantaneous vs average rate of change. Explore how slope relates to velocity, acceleration, and other real-world rates.</p>
    </section>
  );
}

function DerivativesSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <h2>Derivatives: The Speedometer of Math</h2>
      <h3>For Beginners</h3>
      <p>The <b>derivative</b> tells you how fast a function is changing at any instant. It’s like a speedometer for curves—positive means going up, negative means going down.</p>
      <ul>
        <li>The derivative at a point is the slope of the tangent line there.</li>
        <li>For f(x) = x², the derivative is f'(x) = 2x.</li>
      </ul>
      <p><i>Level up tip: Move along the curve and see how the slope (derivative) changes—this is the heart of calculus!</i></p>
      <DerivativeVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Explore the formal definition (limit of the difference quotient), higher-order derivatives, and applications in optimization and motion. Connect to real-world problems:</p>
      <div style={{ marginTop: 16 }}>
        <h4>Real-World Examples</h4>
        <p>See how derivatives are used in physics and economics to describe real change over time or quantity:</p>
        <ApplicationsVisualizer />
      </div>
    </section>
  );
}

function DiffRulesSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <h2>Differentiation Rules</h2>
      <h3>For Beginners</h3>
      <p>There are shortcut rules for finding derivatives quickly:</p>
      <ul>
        <li><b>Power Rule:</b> d/dx[xⁿ] = n·xⁿ⁻¹</li>
        <li><b>Sum Rule:</b> d/dx[f(x)+g(x)] = f'(x)+g'(x)</li>
        <li><b>Product Rule, Chain Rule:</b> For more complex functions</li>
      </ul>
      <p><i>Level up tip: Try switching between rules and see how the derivative changes instantly!</i></p>
      <DiffRulesVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Combine rules to tackle polynomials, products, quotients, and compositions. Practice with challenging functions and see how rules simplify the work.</p>
    </section>
  );
}

function IntegralsSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <h2>Integrals: Area Under the Curve</h2>
      <h3>For Beginners</h3>
      <p>An <b>integral</b> adds up infinitely many tiny pieces. It’s how we find total distance, area, or accumulated value.</p>
      <ul>
        <li>Think of it as the area under a curve, or the total amount collected over time.</li>
        <li>For f(x) = x², the integral from a to b is the area between the curve and the x-axis.</li>
      </ul>
      <p><i>Level up tip: Adjust the range and see how the shaded area (integral) changes!</i></p>
      <IntegralVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Connect integrals to accumulation, net change, and the Fundamental Theorem of Calculus. Apply to real-world problems (distance, economics, probability).</p>
    </section>
  );
}

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
          <nav style={{ marginBottom: 8 }}>
            <a href="#" style={{ marginRight: 16, fontWeight: topic === 'functions' ? 'bold' : 'normal' }} onClick={() => setTopic('functions')}>Functions</a>
            <a href="#" style={{ marginRight: 16, fontWeight: topic === 'slope' ? 'bold' : 'normal' }} onClick={() => setTopic('slope')}>Slope</a>
            <a href="#" style={{ marginRight: 16, fontWeight: topic === 'derivatives' ? 'bold' : 'normal' }} onClick={() => setTopic('derivatives')}>Derivatives</a>
            <a href="#" style={{ marginRight: 16, fontWeight: topic === 'rules' ? 'bold' : 'normal' }} onClick={() => setTopic('rules')}>Diff Rules</a>
            
            <a href="#" style={{ marginRight: 16, fontWeight: topic === 'integrals' ? 'bold' : 'normal' }} onClick={() => setTopic('integrals')}>Integrals</a>
          </nav>
        </div>
        <button onClick={() => setDark(d => !d)} style={{ padding: '6px 16px', fontSize: 16 }}>
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <main>
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
