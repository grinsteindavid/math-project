import React, { useState } from 'react';
import FunctionVisualizer from '../pages/FunctionVisualizer';

function FunctionsSection() {
  const [level, setLevel] = useState('beginner');

  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Function:</b> A rule that assigns each input exactly one output.</li>
          <li><b>Input:</b> The value you put into a function (often called x).</li>
          <li><b>Output:</b> The result you get from a function (often called y or f(x)).</li>
          <li><b>Linear:</b> A straight-line function (like f(x) = 2x + 1).</li>
          <li><b>Quadratic:</b> A function with xu00b2 (makes a parabola shape).</li>
          <li><b>Cubic:</b> A function with xu00b3 (makes an S-shaped curve).</li>
          <li><b>Domain:</b> All possible input values for a function.</li>
          <li><b>Range:</b> All possible output values from a function.</li>
        </ul>
      </details>
      
      <h2>What is a Function?</h2>
      
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
          <p>A <b>function</b> is a rule that assigns to each input exactly one output. For example, f(x) = 2x + 1 is a function that doubles x and adds 1.</p>
          <ul>
            <li>Functions can be linear (straight line), quadratic (parabola), cubic, and more.</li>
            <li>When you input a value (x), the function processes it and gives you exactly one output (y).</li>
            <li>Think of a function as a machine: put something in, get something out.</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Plant Growth</h4>
            <p>The height of a plant as it grows over days can be described by a function:</p>
            <ul>
              <li><b>Input (x):</b> Number of days since planting</li>
              <li><b>Output (y):</b> Height of the plant in centimeters</li>
              <li><b>Function:</b> h(d) = 2d + 5, where d is days (starts at 5cm, grows 2cm each day)</li>
            </ul>
            <p>Try to imagine how the graph would look as the plant grows faster or slower!</p>
          </div>
          
          <p><i><b>Reflection:</b> Think about something in your daily life that changes based on another factor (e.g., how tired you feel based on hours slept, or the cost of buying multiple items of the same price). Could you sketch a simple graph or describe the rule for this relationship? How might this be like a function? Try using the visualizer below to model your idea.</i></p>
          
          <p>The visualizer below lets you explore different function types. Try these activities:</p>
          <ol>
            <li>Select different function types (linear, quadratic, etc.)</li>
            <li>Drag the sliders to change parameters and watch how the graph changes</li>
            <li>Try to create a function that could represent plant growth</li>
          </ol>
          <FunctionVisualizer />
        </div>
      )}
      
      {level === 'advanced' && (
        <div>
          <p>Functions can describe complex relationships and transformations. They form the foundation for modeling real-world phenomena and can be manipulated through operations like composition, inversion, and transformation.</p>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Population Dynamics</h4>
            <p>Population growth can be modeled with various functions:</p>
            <ul>
              <li><b>Linear growth:</b> P(t) = Pu2080 + rt (constant growth rate)</li>
              <li><b>Exponential growth:</b> P(t) = Pu2080eu02b3u1d57 (growth proportional to current size)</li>
              <li><b>Logistic growth:</b> P(t) = K/(1+Aeu207bu02b3u1d57) (limited by carrying capacity)</li>
            </ul>
            <p>These models help predict population sizes for urban planning, conservation, and resource management.</p>
          </div>
          
          <p>Investigate how domain, range, and transformations (shifts, stretches) affect graphs. Explore piecewise functions and their applications in modeling systems with different behaviors under different conditions.</p>
          
          <p><i><b>Prediction:</b> Using the <b>FunctionVisualizer</b>, model a logistic growth function by adjusting parameters. Predict how changing the growth rate parameter will alter the steepness of the curve's middle section. How does this relate to real population growth scenarios where resources become limited? Test your prediction using the visualizer and explain your findings.</i></p>
          
          <FunctionVisualizer />
        </div>
      )}
    </section>
  );
}

export default FunctionsSection;
