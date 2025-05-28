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
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Function:</b> A rule that assigns each input exactly one output.</li>
          <li><b>Input:</b> The value you put into a function (often called x).</li>
          <li><b>Output:</b> The result you get from a function (often called y or f(x)).</li>
          <li><b>Linear:</b> A straight-line function (like f(x) = 2x + 1).</li>
          <li><b>Quadratic:</b> A function with x² (makes a parabola shape).</li>
          <li><b>Cubic:</b> A function with x³ (makes an S-shaped curve).</li>
          <li><b>Domain:</b> All possible input values for a function.</li>
          <li><b>Range:</b> All possible output values from a function.</li>
        </ul>
      </details>
      <h2>What is a Function?</h2>
      <h3>For Beginners</h3>
      <p>A <b>function</b> is a rule that assigns to each input exactly one output. For example, f(x) = 2x + 1 is a function that doubles x and adds 1.</p>
      <ul>
        <li>Functions can be linear (straight line), quadratic (parabola), cubic, and more.</li>
        <li>Try plugging in different values for x to see how the output changes.</li>
      </ul>
      <p><b>Real-life example:</b> The height of a plant as it grows over days can be described by a function. Try to imagine how the graph would look as the plant grows faster or slower!</p>
      <p><i>Reflection: Can you think of something in your life that changes in a predictable way? How could you describe it with a function?</i></p>
      <FunctionVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Explore how functions can describe complex relationships, like population growth or oscillations. Investigate domain, range, and how transformations (shifts, stretches) affect graphs.</p>
      <p><b>Real-life example:</b> Population growth modeling, radioactive decay, and seasonal temperature changes are all described by functions. For instance, the population of a city over time can often be modeled with an exponential function.</p>
      <p><i>Prediction: If you change the parameters of a growth function, what happens to the population curve? Try it in the visualizer!</i></p>
    </section>
  );
}

function SlopeSection() {
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
      <h3>For Beginners</h3>
      <p>The <b>slope</b> of a function at a point tells you how steep the graph is at that point. For straight lines, the slope is constant. For curves, it changes at every x.</p>
      <ul>
        <li>Slope = rise over run = change in y / change in x</li>
        <li>For f(x) = 2x + 1, the slope is 2 everywhere.</li>
      </ul>
      <p><b>Real-life example:</b> The speed of a car (how quickly your position changes) is the slope of your distance vs. time graph. Try to imagine driving up a hill (steep slope) vs. on a flat road (gentle slope).</p>
      <p><i>Reflection: When do you think the slope (speed) is highest or lowest in your daily travel? Try to spot it in the visualizer!</i></p>
      <SlopeVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Analyze instantaneous vs average rate of change. Explore how slope relates to velocity, acceleration, and other real-world rates.</p>
      <p><b>Real-life example:</b> Stock prices, heart rate monitors, and chemical reactions all involve changing slopes. For example, the steeper the stock price graph, the faster the price is changing.</p>
      <p><i>Prediction: What do you think happens to the slope when a car accelerates? Try adjusting the visualizer and explain your reasoning.</i></p>
    </section>
  );
}

function DerivativesSection() {
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
      <h3>For Beginners</h3>
      <p>The <b>derivative</b> tells you how fast a function is changing at any instant. It’s like a speedometer for curves—positive means going up, negative means going down.</p>
      <ul>
        <li>The derivative at a point is the slope of the tangent line there.</li>
        <li>For f(x) = x², the derivative is f'(x) = 2x.</li>
      </ul>
      <p><b>Real-life example:</b> Melting ice cream: The rate at which your ice cream melts on a hot day is a derivative! The hotter it is, the faster it melts.</p>
      <p><i>Reflection: Can you think of something in your life that changes speed? What would its graph look like?</i></p>
      <DerivativeVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Explore the formal definition (limit of the difference quotient), higher-order derivatives, and applications in optimization and motion. Connect to real-world problems:</p>
      <div style={{ marginTop: 16 }}>
        <h4>Real-World Examples</h4>
        <p>See how derivatives are used in physics (velocity, acceleration), economics (marginal profit), and biology (growth rates) to describe real change over time or quantity:</p>
        <ApplicationsVisualizer />
      </div>
      <p><i>Prediction: If you increase the temperature, how does the rate of melting change? Try to explain using the visualizer.</i></p>
    </section>
  );
}

function DiffRulesSection() {
  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Differentiation:</b> The process of finding a derivative.</li>
          <li><b>Power Rule:</b> Shortcut for finding the derivative of xⁿ.</li>
          <li><b>Sum Rule:</b> Shortcut for the derivative of a sum (f+g).</li>
          <li><b>Product Rule:</b> Shortcut for the derivative of a product (fg).</li>
          <li><b>Chain Rule:</b> Shortcut for the derivative of a composition (f(g(x))).</li>
        </ul>
      </details>
      <h2>Differentiation Rules</h2>
      <h3>For Beginners</h3>
      <p>There are shortcut rules for finding derivatives quickly:</p>
      <ul>
        <li><b>Power Rule:</b> d/dx[xⁿ] = n·xⁿ⁻¹</li>
        <li><b>Sum Rule:</b> d/dx[f(x)+g(x)] = f'(x)+g'(x)</li>
        <li><b>Product Rule, Chain Rule:</b> For more complex functions</li>
      </ul>
      <p><b>Real-life example:</b> If you want to know how quickly your total cost increases when buying apples and oranges, you can use the sum rule!</p>
      <p><i>Reflection: Can you think of a situation where you add or multiply things, and want to know how the total changes? Try to model it!</i></p>
      <DiffRulesVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Combine rules to tackle polynomials, products, quotients, and compositions. Practice with challenging functions and see how rules simplify the work.</p>
      <p><b>Real-life example:</b> Compound interest in finance uses the chain rule. Mixing rates in chemistry also require product and chain rules.</p>
      <p><i>Prediction: If you change the growth rate in a compound interest formula, how does it affect the total? Try it in the visualizer and explain why!</i></p>
    </section>
  );
}

function IntegralsSection() {
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
      <h3>For Beginners</h3>
      <p>An <b>integral</b> adds up infinitely many tiny pieces. It’s how we find total distance, area, or accumulated value.</p>
      <ul>
        <li>Think of it as the area under a curve, or the total amount collected over time.</li>
        <li>For f(x) = x², the integral from a to b is the area between the curve and the x-axis.</li>
      </ul>
      <p><b>Real-life example:</b> If you fill a pool with water, the total amount of water is the integral of the flow rate over time.</p>
      <p><i>Reflection: Can you think of a time when you collected or accumulated something? How could you graph it?</i></p>
      <IntegralVisualizer />
      <h3 style={{marginTop:32}}>For Advanced Learners</h3>
      <p>Connect integrals to accumulation, net change, and the Fundamental Theorem of Calculus. Apply to real-world problems (distance, economics, probability).</p>
      <p><b>Real-life example:</b> Total revenue is the integral of sales rate over time. In probability, the area under a curve gives the likelihood of an event.</p>
      <p><i>Prediction: If the sales rate doubles, what happens to total revenue? Try to model it in the visualizer and explain your findings!</i></p>
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
