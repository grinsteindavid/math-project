import React, { useState } from 'react';
import DiffRulesVisualizer from '../pages/DiffRulesVisualizer';

function DiffRulesSection() {
  const [level, setLevel] = useState('beginner');

  return (
    <section style={{ background: 'var(--color-card)', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <details style={{marginBottom:16}}>
        <summary style={{fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Math Words</summary>
        <ul style={{marginTop:8}}>
          <li><b>Differentiation:</b> The process of finding a derivative.</li>
          <li><b>Power Rule:</b> Shortcut for finding the derivative of xu207f.</li>
          <li><b>Sum Rule:</b> Shortcut for the derivative of a sum (f+g).</li>
          <li><b>Product Rule:</b> Shortcut for the derivative of a product (fg).</li>
          <li><b>Chain Rule:</b> Shortcut for the derivative of a composition (f(g(x))).</li>
        </ul>
      </details>
      
      <h2>Differentiation Rules</h2>
      
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
          <p>There are shortcut rules for finding derivatives quickly without having to use the limit definition each time:</p>
          <ul>
            <li><b>Power Rule:</b> d/dx[xu207f] = nu00b7xu207fu207bu00b9 (for any power n)</li>
            <li><b>Sum Rule:</b> d/dx[f(x)+g(x)] = f'(x)+g'(x) (derivatives add together)</li>
            <li><b>Constant Rule:</b> d/dx[c] = 0 (constants don't change, so derivative is zero)</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Shopping Budget</h4>
            <p>Imagine tracking your spending at a grocery store:</p>
            <ul>
              <li><b>Apples cost:</b> $2 per pound u00d7 a pounds = $2a</li>
              <li><b>Oranges cost:</b> $3 per pound u00d7 o pounds = $3o</li>
              <li><b>Total cost function:</b> C(a,o) = $2a + $3o</li>
            </ul>
            <p>The derivative of cost with respect to apples (u2202C/u2202a = $2) tells you exactly how much your total bill increases if you buy one more pound of apples. This is the Sum Rule in action!</p>
          </div>
          
          <p><i><b>Reflection:</b> Imagine you're managing a small project with different tasks, each taking a certain amount of time (which might change). If the time for one task changes, how does it affect the total project time (Sum Rule)? Or, if you're selling two products, and the sales of one depend on the other, how might their combined revenue change (hinting at Product/Chain Rule complexity)? Try to model a simple scenario.</i></p>
          
          <p>The visualizer below lets you explore differentiation rules in action. Try these activities:</p>
          <ol>
            <li>Select different functions and see their derivatives</li>
            <li>Try a polynomial (sum of powers) and observe how the Sum Rule works</li>
            <li>Compare the derivatives of x, xu00b2, xu00b3, etc. to see the Power Rule pattern</li>
          </ol>
          <DiffRulesVisualizer />
        </div>
      )}
      
      {level === 'advanced' && (
        <div>
          <p>Beyond the basic rules, more complex functions require specialized differentiation techniques:</p>
          <ul>
            <li><b>Product Rule:</b> d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)</li>
            <li><b>Quotient Rule:</b> d/dx[f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)]/[g(x)]u00b2</li>
            <li><b>Chain Rule:</b> d/dx[f(g(x))] = f'(g(x)) u00b7 g'(x)</li>
          </ul>
          
          <div style={{ background: 'var(--color-highlight)', padding: 12, borderRadius: 6, marginTop: 16, marginBottom: 16 }}>
            <h4>Real-World Example: Financial Modeling</h4>
            <p>Compound interest demonstrates the Chain Rule in action:</p>
            <ul>
              <li><b>Investment growth:</b> P(t) = Pu2080(1+r)u1d57 or P(t) = Pu2080eu02b3u1d57</li>
              <li><b>Derivative (using Chain Rule):</b> P'(t) = Pu2080r(1+r)u1d57 or P'(t) = Pu2080reu02b3u1d57</li>
              <li><b>Interpretation:</b> The rate of change of your investment at time t</li>
            </ul>
            <p>Financial analysts use these derivatives to calculate instantaneous growth rates, optimize investment timing, and manage risk in complex portfolios.</p>
          </div>
          
          <p>These rules can be combined to differentiate virtually any function. They're essential for solving optimization problems, related rates, and differential equations that model physical systems, economic trends, and biological processes.</p>
          
          <p><i><b>Prediction:</b> Compound interest often involves an exponential function, and the Chain Rule is crucial if the interest rate itself changes over time or is a function of other variables. Using the <b>DiffRulesVisualizer</b>, if you can model a function representing compound growth, predict how a change in the principal amount versus a change in the interest rate would differently impact the instantaneous rate of growth of the investment. Test and explain.</i></p>
          
          <DiffRulesVisualizer />
        </div>
      )}
    </section>
  );
}

export default DiffRulesSection;
