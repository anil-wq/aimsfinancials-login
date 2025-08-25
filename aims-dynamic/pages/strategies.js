import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Strategies() {
  // Solar ITC calculator state
  const [solarCost, setSolarCost] = useState('');
  const [solarResult, setSolarResult] = useState(null);
  const handleSolarCalc = () => {
    const cost = parseFloat(solarCost);
    if (!isNaN(cost) && cost > 0) {
      const credit = cost * 0.3;
      setSolarResult(`Estimated Federal Tax Credit: $${credit.toFixed(2)}`);
    } else {
      setSolarResult(null);
    }
  };
  // RSU calculator state
  const [rsuShares, setRsuShares] = useState('');
  const [rsuFmv, setRsuFmv] = useState('');
  const [rsuRate, setRsuRate] = useState('');
  const [rsuResult, setRsuResult] = useState(null);
  const handleRsuCalc = () => {
    const shares = parseFloat(rsuShares);
    const fmv = parseFloat(rsuFmv);
    const rate = parseFloat(rsuRate);
    if (!isNaN(shares) && !isNaN(fmv) && !isNaN(rate) && shares > 0 && fmv > 0 && rate >= 0) {
      const gross = shares * fmv;
      const tax = gross * (rate / 100);
      const net = gross - tax;
      setRsuResult(`Estimated After‑Tax Value: $${net.toFixed(2)}`);
    } else {
      setRsuResult(null);
    }
  };

  return (
    <div>
      <Head>
        <title>Strategies – AIMS Financials</title>
      </Head>
      {/* Top navigation consistent across pages */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#what">What I Do</a></li>
            <li><a href="/#philosophy">Philosophy</a></li>
            <li><Link href="/education">Learn</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Strategy Workspace</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Model your financial decisions and see their impact in real‑time using our simple calculators.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Solar ITC Calculator */}
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Solar Investment Tax Credit (ITC)</h2>
              <p style={{ color: '#555', marginBottom: '1rem' }}>Enter the cost of your solar project to estimate the 30% federal tax credit.</p>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="solar-cost" style={{ display: 'block', marginBottom: '0.25rem', color: '#555', fontWeight: '500' }}>Total Project Cost ($)</label>
                <input
                  type="number"
                  id="solar-cost"
                  value={solarCost}
                  onChange={(e) => setSolarCost(e.target.value)}
                  placeholder="e.g. 25000"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <button onClick={handleSolarCalc} className="btn-primary" style={{ cursor: 'pointer' }}>Calculate Credit</button>
              {solarResult && <p style={{ marginTop: '0.75rem', color: 'var(--primary-color)', fontWeight: '600' }}>{solarResult}</p>}
            </div>
            {/* RSU Calculator */}
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>RSU After‑Tax Proceeds</h2>
              <p style={{ color: '#555', marginBottom: '1rem' }}>Estimate the after‑tax value of your RSU vest by entering the number of shares, fair market value and your marginal tax rate.</p>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="rsu-shares" style={{ display: 'block', marginBottom: '0.25rem', color: '#555', fontWeight: '500' }}>Number of Shares</label>
                <input
                  type="number"
                  id="rsu-shares"
                  value={rsuShares}
                  onChange={(e) => setRsuShares(e.target.value)}
                  placeholder="e.g. 100"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="rsu-fmv" style={{ display: 'block', marginBottom: '0.25rem', color: '#555', fontWeight: '500' }}>Fair Market Value per Share ($)</label>
                <input
                  type="number"
                  id="rsu-fmv"
                  value={rsuFmv}
                  onChange={(e) => setRsuFmv(e.target.value)}
                  placeholder="e.g. 50"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="rsu-taxrate" style={{ display: 'block', marginBottom: '0.25rem', color: '#555', fontWeight: '500' }}>Marginal Tax Rate (%)</label>
                <input
                  type="number"
                  id="rsu-taxrate"
                  value={rsuRate}
                  onChange={(e) => setRsuRate(e.target.value)}
                  placeholder="e.g. 37"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <button onClick={handleRsuCalc} className="btn-primary" style={{ cursor: 'pointer' }}>Calculate After‑Tax Value</button>
              {rsuResult && <p style={{ marginTop: '0.75rem', color: 'var(--primary-color)', fontWeight: '600' }}>{rsuResult}</p>}
            </div>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#777', textAlign: 'center' }}>
            These calculators provide simplified estimates only. Consult with a financial advisor for personalised analysis.
          </p>
        </div>
      </div>
    </div>
  );
}