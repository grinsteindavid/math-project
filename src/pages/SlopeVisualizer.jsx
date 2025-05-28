import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// Only linear for simplicity, but can be extended
function computeFunction(x, m, b) {
  return m * x + b;
}

const SlopeVisualizer = () => {
  const [m, setM] = useState(1);
  const [b, setB] = useState(0);
  const [x0, setX0] = useState(0);
  const [range, setRange] = useState({ min: -10, max: 10 });

  const xs = Array.from({ length: 200 }, (_, i) => range.min + (i * (range.max - range.min)) / 199);
  const ys = xs.map((x) => computeFunction(x, m, b));
  const y0 = computeFunction(x0, m, b);

  // Tangent for linear = the line itself
  const tangentXs = [x0 - 2, x0 + 2];
  const tangentYs = tangentXs.map((x) => m * (x - x0) + y0);

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h3>Visualize Slope</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16, alignItems: 'flex-start', maxWidth: 400 }}>
        <label style={{ width: '100%' }}>
          <b>m</b> (slope):
          <input type="range" min="-10" max="10" step="0.1" value={m} onChange={e => setM(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min="-10" max="10" step="0.1" value={m} onChange={e => setM(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Controls the tilt of the line</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>b</b> (intercept):
          <input type="range" min="-20" max="20" step="0.1" value={b} onChange={e => setB(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min="-20" max="20" step="0.1" value={b} onChange={e => setB(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Where the line crosses y-axis</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>x₀</b> (point):
          <input type="range" min={range.min} max={range.max} step="0.1" value={x0} onChange={e => setX0(parseFloat(e.target.value))} style={{ width: '60%' }} />
          <input type="number" min={range.min} max={range.max} step="0.1" value={x0} onChange={e => setX0(parseFloat(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Point where tangent is drawn</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>x-min</b>:
          <input type="range" min="-20" max={range.max - 1} step="1" value={range.min} onChange={e => setRange(r => ({ ...r, min: parseFloat(e.target.value) }))} style={{ width: '60%' }} />
          <input type="number" min="-20" max={range.max - 1} step="1" value={range.min} onChange={e => setRange(r => ({ ...r, min: parseFloat(e.target.value) }))} style={{ width: 60, marginLeft: 8 }} />
          <span style={{ fontSize: 13, color: 'var(--color-secondary)' }}>Left edge of the graph</span>
        </label>
        <label style={{ width: '100%' }}>
          <b>x-max</b>:
          <input type="range" min={range.min + 1} max="20" step="1" value={range.max} onChange={e => setRange(r => ({ ...r, max: parseFloat(e.target.value) }))} style={{ width: '60%' }} />
          <input type="number" min={range.min + 1} max="20" step="1" value={range.max} onChange={e => setRange(r => ({ ...r, max: parseFloat(e.target.value) }))} style={{ width: 60, marginLeft: 8 }} />
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
          {
            x: [x0],
            y: [y0],
            type: 'scatter',
            mode: 'markers',
            marker: { color: 'orange', size: 12 },
            name: 'Point (x₀, f(x₀))',
          },
          {
            x: tangentXs,
            y: tangentYs,
            type: 'scatter',
            mode: 'lines',
            name: 'Tangent Line',
            line: { color: 'red', dash: 'dash' },
          },
        ]}
        layout={{
          width: 650,
          height: 400,
          title: 'Slope at a Point',
          xaxis: { title: 'x' },
          yaxis: { title: 'y' },
          legend: { x: 0.7, y: 1 },
        }}
      />
      <div style={{ marginTop: 16 }}>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>f(x)</span> &mdash; Line &nbsp;|&nbsp;
        <span style={{ color: 'orange', fontWeight: 'bold' }}>Point</span> &nbsp;|&nbsp;
        <span style={{ color: 'red', fontWeight: 'bold' }}>Tangent</span>
      </div>
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <b>Tips:</b> Move x₀ to see the tangent slide along the line. For lines, the tangent is always the same as the line itself (slope is constant).
      </div>
    </div>
  );
};

export default SlopeVisualizer;
