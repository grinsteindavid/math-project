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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16, marginBottom: 24 }}>
        <h3>For Beginners</h3>
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
            <li>Input (x): Number of days since planting</li>
            <li>Output (y): Height of the plant in centimeters</li>
            <li>Function: h(d) = 2d + 5, where d is days (starts at 5cm, grows 2cm each day)</li>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
        <h3>For Advanced Learners</h3>
        <p>Functions can describe complex relationships and transformations. They form the foundation for modeling real-world phenomena and can be manipulated through operations like composition, inversion, and transformation.</p>
        
        <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
          <h4>Real-World Example: Population Dynamics</h4>
          <p>Population growth can be modeled with various functions:</p>
          <ul>
            <li><b>Linear growth:</b> P(t) = P₀ + rt (constant growth rate)</li>
            <li><b>Exponential growth:</b> P(t) = P₀eʳᵗ (growth proportional to current size)</li>
            <li><b>Logistic growth:</b> P(t) = K/(1+Ae⁻ʳᵗ) (limited by carrying capacity)</li>
          </ul>
          <p>These models help predict population sizes for urban planning, conservation, and resource management.</p>
        </div>
        
        <p>Investigate how domain, range, and transformations (shifts, stretches) affect graphs. Explore piecewise functions and their applications in modeling systems with different behaviors under different conditions.</p>
        
        <p><i><b>Prediction:</b> Using the <b>FunctionVisualizer</b>, model a logistic growth function by adjusting parameters. Predict how changing the growth rate parameter will alter the steepness of the curve's middle section. How does this relate to real population growth scenarios where resources become limited? Test your prediction using the visualizer and explain your findings.</i></p>
      </div>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16, marginBottom: 24 }}>
        <h3>For Beginners</h3>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
        <h3>For Advanced Learners</h3>
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
      </div>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16, marginBottom: 24 }}>
        <h3>For Beginners</h3>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
        <h3>For Advanced Learners</h3>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16, marginBottom: 24 }}>
        <h3>For Beginners</h3>
        <p>There are shortcut rules for finding derivatives quickly without having to use the limit definition each time:</p>
        <ul>
          <li><b>Power Rule:</b> d/dx[xⁿ] = n·xⁿ⁻¹ (for any power n)</li>
          <li><b>Sum Rule:</b> d/dx[f(x)+g(x)] = f'(x)+g'(x) (derivatives add together)</li>
          <li><b>Constant Rule:</b> d/dx[c] = 0 (constants don't change, so derivative is zero)</li>
        </ul>
        
        <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
          <h4>Real-World Example: Shopping Budget</h4>
          <p>Imagine tracking your spending at a grocery store:</p>
          <ul>
            <li><b>Apples cost:</b> $2 per pound × a pounds = $2a</li>
            <li><b>Oranges cost:</b> $3 per pound × o pounds = $3o</li>
            <li><b>Total cost function:</b> C(a,o) = $2a + $3o</li>
          </ul>
          <p>The derivative of cost with respect to apples (∂C/∂a = $2) tells you exactly how much your total bill increases if you buy one more pound of apples. This is the Sum Rule in action!</p>
        </div>
        
        <p><i><b>Reflection:</b> Imagine you're managing a small project with different tasks, each taking a certain amount of time (which might change). If the time for one task changes, how does it affect the total project time (Sum Rule)? Or, if you're selling two products, and the sales of one depend on the other, how might their combined revenue change (hinting at Product/Chain Rule complexity)? Try to model a simple scenario.</i></p>
        
        <p>The visualizer below lets you explore differentiation rules in action. Try these activities:</p>
        <ol>
          <li>Select different functions and see their derivatives</li>
          <li>Try a polynomial (sum of powers) and observe how the Sum Rule works</li>
          <li>Compare the derivatives of x, x², x³, etc. to see the Power Rule pattern</li>
        </ol>
        <DiffRulesVisualizer />
      </div>
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
        <h3>For Advanced Learners</h3>
        <p>Beyond the basic rules, more complex functions require specialized differentiation techniques:</p>
        <ul>
          <li><b>Product Rule:</b> d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)</li>
          <li><b>Quotient Rule:</b> d/dx[f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)]/[g(x)]²</li>
          <li><b>Chain Rule:</b> d/dx[f(g(x))] = f'(g(x)) · g'(x)</li>
        </ul>
        
        <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
          <h4>Real-World Example: Financial Modeling</h4>
          <p>Compound interest demonstrates the Chain Rule in action:</p>
          <ul>
            <li><b>Investment growth:</b> P(t) = P₀(1+r)ᵗ or P(t) = P₀eʳᵗ</li>
            <li><b>Derivative (using Chain Rule):</b> P'(t) = P₀r(1+r)ᵗ or P'(t) = P₀reʳᵗ</li>
            <li><b>Interpretation:</b> The rate of change of your investment at time t</li>
          </ul>
          <p>Financial analysts use these derivatives to calculate instantaneous growth rates, optimize investment timing, and manage risk in complex portfolios.</p>
        </div>
        
        <p>These rules can be combined to differentiate virtually any function. They're essential for solving optimization problems, related rates, and differential equations that model physical systems, economic trends, and biological processes.</p>
        
        <p><i><b>Prediction:</b> Compound interest often involves an exponential function, and the Chain Rule is crucial if the interest rate itself changes over time or is a function of other variables. Using the <b>DiffRulesVisualizer</b>, if you can model a function representing compound growth, predict how a change in the principal amount versus a change in the interest rate would differently impact the instantaneous rate of growth of the investment. Test and explain.</i></p>
      </div>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16, marginBottom: 24 }}>
        <h3>For Beginners</h3>
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
      
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
        <h3>For Advanced Learners</h3>
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
      </div>
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
