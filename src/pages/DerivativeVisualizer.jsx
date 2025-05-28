import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// Default parameters for quadratic function
const defaultParams = { a: 1, b: 0, c: 0 };

// Example presets for quick exploration
const presets = [
  { label: 'Linear (f(x) = 2x + 1)', params: { a: 0, b: 2, c: 1 } },
  { label: 'Quadratic (f(x) = x²)', params: { a: 1, b: 0, c: 0 } },
  { label: 'Quadratic (f(x) = -x² + 3x - 2)', params: { a: -1, b: 3, c: -2 } },
  { label: 'Cubic (f(x) = x³)', params: { a: 0, b: 0, c: 0, cubic: true } },
];

function computeFunction(x, { a, b, c, cubic }) {
  if (cubic) return x * x * x;
  return a * x * x + b * x + c;
}

function computeDerivative(x, { a, b, cubic }) {
  if (cubic) return 3 * x * x;
  return 2 * a * x + b;
}

const DerivativeVisualizer = () => {
  const [params, setParams] = useState(defaultParams);
  const [range, setRange] = useState({ min: -10, max: 10 });

  // Generate x values and compute y values for function and derivative
  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map((x) => computeFunction(x, params));
  const dys = xs.map((x) => computeDerivative(x, params));

  // Handle parameter changes
  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value), cubic: false }));
  };

  // Handle range changes
  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  // Handle preset buttons
  const handlePreset = (preset) => {
    setParams(preset.params);
  };

  return (
    <div>
      <section style={{ marginBottom: 16 }}>
        <h2>Derivative Visualizer</h2>
        <p>
          The <b>derivative</b> of a function tells us how fast the function is changing at any point. In other words, it gives the <b>slope</b> of the function at every x. If the derivative is positive, the function goes up; if it's negative, the function goes down.
        </p>
        <h3>How to Use This Visualizer</h3>
        <ul>
          <li>Adjust the parameters below to create different functions.</li>
          <li>The <span style={{ color: 'blue', fontWeight: 'bold' }}>blue curve</span> shows the function <b>f(x)</b>.</li>
          <li>The <span style={{ color: 'red', fontWeight: 'bold' }}>red dashed curve</span> shows its derivative <b>f'(x)</b>.</li>
          <li>Try the example presets for quick exploration!</li>
        </ul>
      </section>
      <section style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
          {presets.map((preset, idx) => (
            <button key={idx} onClick={() => handlePreset(preset)} style={{ padding: '4px 10px', cursor: 'pointer' }}>{preset.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16, alignItems: 'flex-start', maxWidth: 400 }}>
          <label style={{ width: '100%' }}>
            <b>a</b> (curvature):
            <input type="range" min="-5" max="5" step="0.1" name="a" value={params.a ?? 0} disabled={params.cubic} onChange={handleParamChange} style={{ width: '60%' }} />
            <input type="number" min="-5" max="5" step="0.1" name="a" value={params.a ?? ''} disabled={params.cubic} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
            <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Controls the curve's steepness</span>
          </label>
          <label style={{ width: '100%' }}>
            <b>b</b> (slope):
            <input type="range" min="-10" max="10" step="0.1" name="b" value={params.b ?? 0} disabled={params.cubic} onChange={handleParamChange} style={{ width: '60%' }} />
            <input type="number" min="-10" max="10" step="0.1" name="b" value={params.b ?? ''} disabled={params.cubic} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
            <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Controls the tilt of the graph</span>
          </label>
          <label style={{ width: '100%' }}>
            <b>c</b> (vertical shift):
            <input type="range" min="-20" max="20" step="0.1" name="c" value={params.c ?? 0} disabled={params.cubic} onChange={handleParamChange} style={{ width: '60%' }} />
            <input type="number" min="-20" max="20" step="0.1" name="c" value={params.c ?? ''} disabled={params.cubic} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
            <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Moves the graph up or down</span>
          </label>
          <label style={{ width: '100%' }}>
            <b>x-min</b>:
            <input type="range" min="-20" max={range.max - 1} step="1" name="min" value={range.min} onChange={handleRangeChange} style={{ width: '60%' }} />
            <input type="number" min="-20" max={range.max - 1} step="1" name="min" value={range.min} onChange={handleRangeChange} style={{ width: 60, marginLeft: 8 }} />
            <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Left edge of the graph</span>
          </label>
          <label style={{ width: '100%' }}>
            <b>x-max</b>:
            <input type="range" min={range.min + 1} max="20" step="1" name="max" value={range.max} onChange={handleRangeChange} style={{ width: '60%' }} />
            <input type="number" min={range.min + 1} max="20" step="1" name="max" value={range.max} onChange={handleRangeChange} style={{ width: 60, marginLeft: 8 }} />
            <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Right edge of the graph</span>
          </label>
        </div>
      </section>
      <Plot
        data={[
          {
            x: xs,
            y: ys,
            type: 'scatter',
            mode: 'lines',
            name: 'f(x)',
            line: { color: 'blue' },
          },
          {
            x: xs,
            y: dys,
            type: 'scatter',
            mode: 'lines',
            name: "f'(x)",
            line: { color: 'red', dash: 'dash' },
          },
        ]}
        layout={{
          width: 650,
          height: 400,
          title: 'Function and Derivative',
          xaxis: { title: 'x' },
          yaxis: { title: 'y' },
          legend: { x: 0.7, y: 1 },
        }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>f(x)</span> &mdash; Function &nbsp; | &nbsp;
        <span style={{ color: 'red', fontWeight: 'bold' }}>f'(x)</span> &mdash; Derivative
      </div>
      <section style={{ marginTop: 32, background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
        <h3>Understanding the Graphs</h3>
        <ul>
          <li>The <b>blue curve</b> is your function. Move your mouse along the curve to see how it changes as x changes.</li>
          <li>The <b>red dashed curve</b> is the derivative. Wherever this curve is above zero, your function is increasing; wherever it's below zero, your function is decreasing.</li>
          <li>Where the red curve crosses zero, your function has a flat spot (a peak, valley, or inflection point).</li>
        </ul>
        <h4>Try This!</h4>
        <ul>
          <li>Pick a preset and see how the shapes of the function and its derivative relate.</li>
          <li>Change <b>a</b> to make the function more "curvy" (steeper parabola).</li>
          <li>Try a cubic (f(x) = x³) and see how its derivative (3x²) behaves!</li>
          <li>Notice how the derivative tells you the "speed" and "direction" of the function at every point.</li>
        </ul>
        <p>Keep experimenting! Calculus is all about understanding how things change.</p>
      </section>
    </div>
  );
};

export default DerivativeVisualizer;
