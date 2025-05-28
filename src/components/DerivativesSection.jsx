import React, { useState } from 'react';
import DerivativeVisualizer from '../pages/DerivativeVisualizer';
import ApplicationsVisualizer from '../pages/ApplicationsVisualizer';

function DerivativesSection() {
  const [level, setLevel] = useState('beginner');

  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Derivative:</b> How fast something is changing at any moment.</li>
          <li><b>Tangent:</b> A line that touches a curve at one point and has the same slope there.</li>
          <li><b>Instantaneous Rate:</b> The rate of change at a single instant.</li>
          <li><b>Difference Quotient:</b> The formula for finding a derivative (limit of [f(x+h)-f(x)]/h as h→0).</li>
          <li><b>Optimization:</b> Finding the best (maximum or minimum) value.</li>
        </ul>
      </details>
      
      <h2>Derivatives: The Speedometer of Math</h2>
      
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
          <p>The <b>derivative</b> tells you how fast a function is changing at any instant. It's like a speedometer for curves—positive means going up, negative means going down.</p>
          <ul>
            <li>The derivative at a point is the slope of the tangent line there</li>
            <li>For f(x) = x², the derivative is f'(x) = 2x</li>
            <li>When the derivative is zero, the function has a flat point (peak or valley)</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Melting Ice Cream</h4>
            <p>The melting of ice cream on a hot day demonstrates derivatives in action:</p>
            <ul>
              <li><b>Function:</b> The amount of ice cream left over time</li>
              <li><b>Derivative:</b> How quickly it's melting at any moment</li>
              <li><b>Variables:</b> Temperature affects the derivative - hotter day means faster melting (larger derivative)</li>
            </ul>
            <p>The derivative tells you exactly how many milliliters of ice cream are turning to liquid each minute!</p>
          </div>
          
          <p><i><b>Reflection:</b> Think about something that doesn't just move, but changes its speed or rate of change – a ball thrown in the air, a cooling cup of coffee, or your own learning pace on a new skill. What would the graph of its "value" over time look like, and what would its "rate of change" graph (derivative) look like? Test your ideas with the visualizer below.</i></p>
          
          <p>The visualizer below lets you explore how derivatives work. Try these activities:</p>
          <ol>
            <li>Select different functions and observe their derivatives (red dashed line)</li>
            <li>Find where the derivative is positive, negative, and zero</li>
            <li>Notice how the derivative is steepest where the function changes most rapidly</li>
          </ol>
          <DerivativeVisualizer />
        </div>
      )}
      
      {level === 'advanced' && (
        <div>
          <p>The derivative f'(x) represents the instantaneous rate of change of f(x) with respect to x. Formally, it's defined as the limit of the difference quotient: f'(x) = lim[h→0] [f(x+h) - f(x)]/h. Higher-order derivatives (f''(x), f'''(x), etc.) measure how the rate of change itself is changing.</p>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Physics & Economics</h4>
            <p>Derivatives are fundamental to understanding dynamic systems:</p>
            <ul>
              <li><b>Physics:</b> Position → Velocity (1st derivative) → Acceleration (2nd derivative)</li>
              <li><b>Economics:</b> Total cost → Marginal cost (1st derivative) → Rate of change of marginal cost (2nd derivative)</li>
              <li><b>Biology:</b> Population → Growth rate (1st derivative) → Acceleration of growth (2nd derivative)</li>
            </ul>
            <p>These applications allow scientists and economists to predict behavior and optimize outcomes.</p>
          </div>
          
          <p>Derivatives enable optimization (finding maxima and minima), related rates problems, and differential equations that model complex systems. They're essential tools in calculus, physics, engineering, economics, and data science.</p>
          
          <p><i><b>Prediction:</b> The <b>ApplicationsVisualizer</b> below shows scenarios like motion (position, velocity, acceleration) or economic models. Choose one scenario. Before changing parameters, predict how a specific change (e.g., increasing initial velocity, or changing a cost factor) will affect the function's derivative. Test your hypothesis with the visualizer and analyze the outcome.</i></p>
          
          <p>The visualizer below demonstrates these real-world applications of derivatives:</p>
          <ApplicationsVisualizer />
        </div>
      )}
    </section>
  );
}

export default DerivativesSection;
