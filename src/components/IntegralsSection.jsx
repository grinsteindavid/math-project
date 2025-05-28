import React, { useState } from 'react';
import IntegralVisualizer from '../pages/IntegralVisualizer';

function IntegralsSection() {
  const [level, setLevel] = useState('beginner');

  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Integral:</b> Adds up infinitely many tiny pieces to find a total.</li>
          <li><b>Area Under the Curve:</b> The space between a curve and the x-axis.</li>
          <li><b>Accumulation:</b> The total amount collected or added up.</li>
          <li><b>Net Change:</b> The overall change (final minus initial value).</li>
          <li><b>Fundamental Theorem of Calculus:</b> Connects derivatives and integrals.</li>
        </ul>
      </details>
      
      <h2>Integrals: Area Under the Curve</h2>
      
      <div style={{ marginBottom: 20 }}>
        <div className="level-tabs">
          <button 
            className={level === 'beginner' ? 'active' : ''} 
            onClick={() => setLevel('beginner')}
          >
            For Beginners
          </button>
          <button 
            className={level === 'advanced' ? 'active' : ''} 
            onClick={() => setLevel('advanced')}
          >
            For Advanced Learners
          </button>
        </div>
      </div>

      {level === 'beginner' && (
        <div>
          <p>An <b>integral</b> adds up infinitely many tiny pieces to find a total. It's the opposite of a derivative - while derivatives break things down, integrals build them up.</p>
          <ul>
            <li>Think of it as the area under a curve, or the total amount collected over time</li>
            <li>We write it as ∫f(x)dx, which means "sum up all the tiny pieces f(x)dx"</li>
            <li>For example, ∫x²dx from 0 to 3 = [x³/3] from 0 to 3 = 9</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Filling a Swimming Pool</h4>
            <p>Imagine filling a swimming pool with a hose:</p>
            <ul>
              <li><b>Flow rate:</b> Gallons per minute coming out of the hose (may vary over time)</li>
              <li><b>Integral:</b> Total gallons of water in the pool after t minutes</li>
              <li><b>Example:</b> If water flows at 5 gallons/minute for 20 minutes, you get 5 × 20 = 100 gallons</li>
            </ul>
            <p>But if the flow rate changes (maybe you adjust the faucet), you need an integral to calculate the total: ∫flow(t)dt from 0 to 20 minutes.</p>
          </div>
          
          <p><i><b>Reflection:</b> Think about collecting rainwater in a barrel, or the total distance you've walked over several minutes. If you graphed the rate of collection (or your speed), how would the total accumulation be represented? Try modeling this concept using the visualizer below.</i></p>
          
          <p>The visualizer below lets you explore how integrals work. Try these activities:</p>
          <ol>
            <li>Select different functions and observe the shaded area under the curve</li>
            <li>Adjust the interval bounds (a and b) to see how the integral changes</li>
            <li>Try to predict the area before calculating it</li>
          </ol>
          <IntegralVisualizer />
        </div>
      )}
      
      {level === 'advanced' && (
        <div>
          <p>Integrals come in two main forms: definite (∫ₐᵇf(x)dx, which gives a specific value) and indefinite (∫f(x)dx, which gives a family of functions). The Fundamental Theorem of Calculus connects derivatives and integrals: if F'(x) = f(x), then ∫ₐᵇf(x)dx = F(b) - F(a).</p>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Economics & Probability</h4>
            <p>Integrals are essential in many advanced applications:</p>
            <ul>
              <li><b>Economics:</b> Total revenue = ∫R(t)dt where R(t) is the revenue rate</li>
              <li><b>Probability:</b> P(a ≤ X ≤ b) = ∫ₐᵇf(x)dx where f(x) is a probability density function</li>
              <li><b>Physics:</b> Work done = ∫F(x)dx where F(x) is a variable force</li>
            </ul>
            <p>For example, economists use integrals to calculate consumer surplus by finding the area between the demand curve and the market price line.</p>
          </div>
          
          <p>Integration techniques include substitution, integration by parts, partial fractions, and numerical methods. These allow us to solve differential equations, calculate volumes and surface areas, analyze signals, and model physical phenomena like heat diffusion and wave propagation.</p>
          
          <p><i><b>Prediction:</b> If a company's sales rate (units sold per day) is represented by a function f(t), then the total revenue over a period is related to the integral of f(t) (multiplied by price per unit). If the sales rate function <em>doubles</em> (e.g., becomes 2f(t)), predict how the total accumulated revenue over the same period will change. Model this in the <b>IntegralVisualizer</b> if possible, and explain the relationship you observe.</i></p>
          
          <IntegralVisualizer />
        </div>
      )}
    </section>
  );
}

export default IntegralsSection;
