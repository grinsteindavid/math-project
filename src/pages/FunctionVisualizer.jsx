import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const presets = [
  { label: 'Linear (f(x) = 2x + 1)', params: { a: 0, b: 2, c: 1 } },
  { label: 'Quadratic (f(x) = x² - 2x + 1)', params: { a: 1, b: -2, c: 1 } },
  { label: 'Cubic (f(x) = x³)', params: { cubic: true } },
];

function computeFunction(x, { a = 0, b = 0, c = 0, cubic = false }) {
  if (cubic) return x * x * x;
  return a * x * x + b * x + c;
}

const FunctionVisualizer = () => {
  const [params, setParams] = useState({ a: 1, b: 0, c: 0, cubic: false });
  const [range, setRange] = useState({ min: -10, max: 10 });

  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map((x) => computeFunction(x, params));

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value), cubic: false }));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handlePreset = (preset) => {
    setParams(preset.params);
  };

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h3>Explore Functions</h3>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        {presets.map((preset, idx) => (
          <button key={idx} onClick={() => handlePreset(preset)}>{preset.label}</button>
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
        ]}
        layout={{
          width: 650,
          height: 400,
          title: 'Function f(x)',
          xaxis: { title: 'x' },
          yaxis: { title: 'y' },
        }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>f(x)</span> &mdash; Function
      </div>
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <b>Tips:</b> Try changing the coefficients or picking a preset and see how the graph changes. For cubics, only the x³ term is shown.
      </div>
    </div>
  );
};

export default FunctionVisualizer;
