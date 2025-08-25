import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Vault() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(newFiles);
  };

  return (
    <div>
      <Head>
        <title>Vault – AIMS Financials</title>
      </Head>
      {/* Shared navigation */}
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
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Document Vault</h1>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
            Upload and organise your financial documents securely. Future versions will connect to encrypted cloud storage.
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div
              style={{
                border: '2px dashed #ccc',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <p style={{ marginBottom: '1rem', color: '#666' }}>
                Drag and drop your files here or click the button below to select files.
              </p>
              <input
                type="file"
                multiple
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button
                onClick={() => document.getElementById('fileInput').click()}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Select Files
              </button>
            </div>
            {files.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Files selected:</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
                  {files.map((file, index) => (
                    <li key={index} style={{ color: '#555' }}>
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '1.5rem' }}>
              Uploads are not yet functional. This feature will connect to secure cloud storage in the next development phase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}