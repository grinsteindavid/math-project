import React, { useState } from 'react';
import SlopeVisualizer from '../pages/SlopeVisualizer';

function SlopeSection() {
  const [level, setLevel] = useState('beginner');

  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Slope:</b> How steep a line is (rise over run).</li>
          <li><b>Rate of Change:</b> How quickly something changes.</li>
          <li><b>Secant Line:</b> A line that cuts through a curve at two points.</li>
          <li><b>Tangent Line:</b> A line that just touches a curve at one point.</li>
          <li><b>Intercept:</b> Where a line crosses the y-axis.</li>
          <li><b>Linear Function:</b> A function whose graph is a straight line.</li>
        </ul>
      </details>
      
      <h2>Slope & Rate of Change</h2>
      
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
          <p>The <b>slope</b> of a function at a point tells you how steep the graph is at that point. For straight lines, the slope is constant. For curves, it changes at every x.</p>
          <ul>
            <li>Slope = rise over run = change in y / change in x</li>
            <li>For f(x) = 2x + 1, the slope is 2 everywhere</li>
            <li>Positive slope means going uphill, negative slope means going downhill</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Bicycle Journey</h4>
            <p>Imagine riding a bicycle on different terrains:</p>
            <ul>
              <li><b>Steep uphill:</b> Large positive slope (hard to pedal, slow progress)</li>
              <li><b>Gentle uphill:</b> Small positive slope (moderate effort)</li>
              <li><b>Flat road:</b> Zero slope (easy, constant speed)</li>
              <li><b>Downhill:</b> Negative slope (no pedaling needed, speed increases)</li>
            </ul>
            <p>The slope of your path directly affects how quickly you can travel!</p>
          </div>
          
          <p><i><b>Reflection:</b> Think about your journey to school or work. When is your speed (the slope of your distance-time graph) highest, lowest, or even zero? Try to sketch this and then use the visualizer below to recreate similar slope changes by adjusting the function or points.</i></p>
          
          <p>The visualizer below lets you explore how slope changes at different points. Try these activities:</p>
          <ol>
            <li>Select a curved function and observe how the slope changes at different points</li>
            <li>Find where the slope is positive, negative, and zero</li>
            <li>Try to create a function that represents a bicycle journey with varying terrains</li>
          </ol>
          <SlopeVisualizer />
        </div>
      )}
      
      {level === 'advanced' && (
        <div>
          <p>The concept of slope extends to instantaneous rate of change in calculus. For any function f(x), the slope at a point x₀ is given by the limit of the difference quotient as h approaches 0: f'(x₀) = lim[h→0] [f(x₀+h) - f(x₀)]/h.</p>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Market Analysis</h4>
            <p>Financial analysts use slopes to understand market trends:</p>
            <ul>
              <li><b>Stock price slopes:</b> Indicate momentum and rate of price change</li>
              <li><b>Yield curve slopes:</b> Predict economic conditions (normal, flat, or inverted)</li>
              <li><b>Regression line slopes:</b> Measure correlation between economic variables</li>
            </ul>
            <p>For example, a steepening yield curve (increasing slope) often suggests economic expansion, while a flattening curve may signal economic slowdown.</p>
          </div>
          
          <p>Analyze how instantaneous rates of change differ from average rates. Explore applications in physics (velocity as the slope of position-time, acceleration as the slope of velocity-time) and economics (marginal cost as the slope of the total cost function).</p>
          
          <p><i><b>Prediction:</b> When a car accelerates, its speed (slope of distance-time) is increasing. What does this imply about the shape of the distance-time graph? How would the slope of the <em>velocity-time</em> graph look during acceleration? Use the <b>SlopeVisualizer</b> to model a curve representing increasing speed and observe its tangent lines. Explain your reasoning using calculus principles.</i></p>
          
          <SlopeVisualizer />
        </div>
      )}
    </section>
  );
}

export default SlopeSection;
