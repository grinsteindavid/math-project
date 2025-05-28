import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function computeFunction(x, { a = 1, b = 0, c = 0 }) {
  return a * x * x + b * x + c;
}
function computeIntegral(a, b, c, min, max) {
  // Integral of ax^2 + bx + c from min to max
  const F = x => (a/3)*x*x*x + (b/2)*x*x + c*x;
  return F(max) - F(min);
}

const IntegralVisualizer = () => {
  const [params, setParams] = useState({ a: 1, b: 0, c: 0 });
  const [range, setRange] = useState({ min: 0, max: 5 });
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(5);
  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map(x => computeFunction(x, params));
  const area = computeIntegral(params.a, params.b, params.c, lower, upper);
  const shadeXs = xs.filter(x => x >= lower && x <= upper);
  const shadeYs = shadeXs.map(x => computeFunction(x, params));

  const handleParamChange = e => {
    setParams(p => ({ ...p, [e.target.name]: parseFloat(e.target.value) }));
  };

  const handleRangeChange = e => {
    setRange(r => ({ ...r, [e.target.name]: parseFloat(e.target.value) }));
  };

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h3>Integral: Area Under the Curve</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16, alignItems: 'flex-start', maxWidth: 400 }}>
        <label style={{ width: '100%' }}>
          <b>a</b> (curvature):
          <input type="range" min="-5" max="5" step="0.1" name="a" value={params.a ?? 0} onChange={handleParamChange} style={{ width: '60%' }} />
          <input type="number" min="-5" max="5" step="0.1" name="a" value={params.a ?? ''} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Controls the curve's steepness</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>b</b> (slope):
          <input type="range" min="-10" max="10" step="0.1" name="b" value={params.b ?? 0} onChange={handleParamChange} style={{ width: '60%' }} />
          <input type="number" min="-10" max="10" step="0.1" name="b" value={params.b ?? ''} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Controls the tilt of the graph</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>c</b> (vertical shift):
          <input type="range" min="-20" max="20" step="0.1" name="c" value={params.c ?? 0} onChange={handleParamChange} style={{ width: '60%' }} />
          <input type="number" min="-20" max="20" step="0.1" name="c" value={params.c ?? ''} onChange={handleParamChange} style={{ width: 60, marginLeft: 8 }} />
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
        <label style={{ width: '100%' }}>
          <b>Lower Bound</b>:
          <input type="range" min={range.min} max={upper - 1} step="0.1" value={lower} onChange={e => setLower(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min={range.min} max={upper - 1} step="0.1" value={lower} onChange={e => setLower(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Start of integration</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>Upper Bound</b>:
          <input type="range" min={lower + 1} max={range.max} step="0.1" value={upper} onChange={e => setUpper(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min={lower + 1} max={range.max} step="0.1" value={upper} onChange={e => setUpper(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>End of integration</span>
        </label>
      </div>
      <Plot
        data={[
          { x: xs, y: ys, type: 'scatter', mode: 'lines', name: 'f(x)', line: { color: 'blue' } },
          { x: shadeXs.concat([...shadeXs].reverse()), y: shadeYs.concat(Array(shadeYs.length).fill(0)), type: 'scatter', fill: 'toself', fillcolor: 'rgba(0,200,0,0.2)', line: { color: 'rgba(0,0,0,0)' }, name: 'Area' },
        ]}
        layout={{ width: 650, height: 400, title: 'Area Under f(x)', xaxis: { title: 'x' }, yaxis: { title: 'y' } }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>f(x)</span> &mdash; Function &nbsp;|&nbsp;
        <span style={{ color: 'green', fontWeight: 'bold' }}>Area</span> &mdash; Integral
      </div>
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <b>Tips:</b> Adjust the range and coefficients to see how the area changes. The integral is the total "accumulated" value between x-min and x-max.
      </div>
      <div style={{ marginTop: 12, fontWeight: 'bold' }}>
        Area under curve: {area.toFixed(3)}
      </div>
    </div>
  );
};

export default IntegralVisualizer;
