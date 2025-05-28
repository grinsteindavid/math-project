import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// User enters a function, we show its derivative using rules
const presets = [
  { label: 'Power Rule: f(x) = x^3', func: x => Math.pow(x, 3), derivative: x => 3 * x * x, latex: 'f(x) = x^3', rule: "d/dx[x^n] = n x^{n-1}" },
  { label: 'Sum Rule: f(x) = x^2 + 3x', func: x => x * x + 3 * x, derivative: x => 2 * x + 3, latex: 'f(x) = x^2 + 3x', rule: "d/dx[f+g] = f'+g'" },
  { label: 'Product Rule: f(x) = x(x+2)', func: x => x * (x + 2), derivative: x => 2 * x + 2, latex: 'f(x) = x(x+2)', rule: "d/dx[fg] = f'g + fg'" },
];

const DiffRulesVisualizer = () => {
  const [presetIdx, setPresetIdx] = useState(0);
  const preset = presets[presetIdx];
  const [range, setRange] = useState({ min: -10, max: 10 });
  const [x, setX] = useState(0);
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map(preset.func);
  const dys = xs.map(preset.derivative);
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h3>Differentiation Rules in Action</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16, alignItems: 'flex-start', maxWidth: 400 }}>
        <label style={{ width: '100%' }}>
          <b>x</b> (input value):
          <input type="range" min="-10" max="10" step="0.1" value={x} onChange={e => setX(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min="-10" max="10" step="0.1" value={x} onChange={e => setX(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Value to plug into the function</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>a</b> (coefficient):
          <input type="range" min="-10" max="10" step="0.1" value={a} onChange={e => setA(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min="-10" max="10" step="0.1" value={a} onChange={e => setA(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Coefficient for the function</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>b</b> (coefficient):
          <input type="range" min="-10" max="10" step="0.1" value={b} onChange={e => setB(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min="-10" max="10" step="0.1" value={b} onChange={e => setB(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Coefficient for the function</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>Range</b>:
          <input type="range" min="-20" max="20" step="1" value={range.min} onChange={e => setRange({ ...range, min: parseFloat(e.target.value) })} style={{ width: '45%' }} />
          <input type="number" min="-20" max="20" step="1" value={range.min} onChange={e => setRange({ ...range, min: parseFloat(e.target.value) })} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Minimum value of the range</span>
          <input type="range" min="-20" max="20" step="1" value={range.max} onChange={e => setRange({ ...range, max: parseFloat(e.target.value) })} style={{ width: '45%', marginLeft: 16 }} />
          <input type="number" min="-20" max="20" step="1" value={range.max} onChange={e => setRange({ ...range, max: parseFloat(e.target.value) })} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Maximum value of the range</span>
        </label>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {presets.map((p, idx) => (
          <button key={idx} onClick={() => setPresetIdx(idx)} style={{ fontWeight: idx === presetIdx ? 'bold' : 'normal' }}>{p.label}</button>
        ))}
      </div>
      <div style={{ marginBottom: 8 }}>
        <b>Function:</b> <span style={{ fontFamily: 'monospace' }}>{preset.latex}</span><br />
        <b>Rule:</b> <span style={{ fontFamily: 'monospace' }}>{preset.rule}</span>
      </div>
      <Plot
        data={[
          { x: xs, y: ys, type: 'scatter', mode: 'lines', name: 'f(x)', line: { color: 'blue' } },
          { x: xs, y: dys, type: 'scatter', mode: 'lines', name: "f'(x)", line: { color: 'red', dash: 'dash' } },
        ]}
        layout={{ width: 650, height: 400, title: 'Function & Derivative', xaxis: { title: 'x' }, yaxis: { title: 'y' } }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>f(x)</span> &mdash; Function &nbsp;|&nbsp;
        <span style={{ color: 'red', fontWeight: 'bold' }}>f'(x)</span> &mdash; Derivative
      </div>
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <b>Tips:</b> Try switching rules and see how the derivative changes instantly. Each rule is a shortcut for finding how fast something changes.
      </div>
    </div>
  );
};

export default DiffRulesVisualizer;
