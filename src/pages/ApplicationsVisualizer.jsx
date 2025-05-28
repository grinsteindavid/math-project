import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const scenarios = [
  {
    label: 'Physics: Ball in the Air',
    equation: 'h(t) = -5t² + 20t',
    func: t => -5 * t * t + 20 * t,
    derivative: t => -10 * t + 20,
    desc: 'Height of a ball over time (meters, seconds). Derivative is velocity.'
  },
  {
    label: 'Economics: Profit vs Units',
    equation: 'P(x) = -2x² + 40x - 100',
    func: x => -2 * x * x + 40 * x - 100,
    derivative: x => -4 * x + 40,
    desc: 'Profit as a function of units sold. Derivative is marginal profit.'
  }
];

const ApplicationsVisualizer = () => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const scenario = scenarios[scenarioIdx];
  const [range] = useState({ min: 0, max: 20 });
  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map(scenario.func);
  const dys = xs.map(scenario.derivative);
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h3>Real-World Applications</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {scenarios.map((s, idx) => (
          <button key={idx} onClick={() => setScenarioIdx(idx)} style={{ fontWeight: idx === scenarioIdx ? 'bold' : 'normal' }}>{s.label}</button>
        ))}
      </div>
      <div style={{ marginBottom: 8 }}>
        <b>Equation:</b> <span style={{ fontFamily: 'monospace' }}>{scenario.equation}</span><br />
        <b>Description:</b> {scenario.desc}
      </div>
      <Plot
        data={[
          { x: xs, y: ys, type: 'scatter', mode: 'lines', name: 'Scenario', line: { color: 'blue' } },
          { x: xs, y: dys, type: 'scatter', mode: 'lines', name: 'Derivative', line: { color: 'red', dash: 'dash' } },
        ]}
        layout={{ width: 650, height: 400, title: 'Scenario & Derivative', xaxis: { title: scenarioIdx === 0 ? 't (seconds)' : 'x (units)' }, yaxis: { title: 'y' } }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Scenario</span> &mdash; Real Problem &nbsp;|&nbsp;
        <span style={{ color: 'red', fontWeight: 'bold' }}>Derivative</span> &mdash; Rate of Change
      </div>
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <b>Tips:</b> Switch scenarios and see how calculus answers real questions: When is the ball at its peak? When is profit maximized?
      </div>
    </div>
  );
};

export default ApplicationsVisualizer;
