import React, { useState } from 'react';

const App = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (!originalUrl.trim()) return;

    const fakeShort = 'https://sho.rt/' + Math.random().toString(36).substring(2, 6);
    setShortUrl(fakeShort);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔗 URL Shortener</h1>

        <input
          type="text"
          placeholder="Paste your long URL here"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleShorten} style={styles.button}>
          Shorten URL
        </button>

        {shortUrl && (
          <div style={styles.resultBox}>
            <p style={styles.resultText}>Shortened URL:</p>
            <a
              href={originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '25px',
    color: '#333',
    fontSize: '28px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    backgroundColor: '#2193b0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  resultBox: {
    marginTop: '30px',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderRadius: '8px',
  },
  resultText: {
    marginBottom: '8px',
    color: '#555',
  },
  link: {
    fontSize: '18px',
    color: '#2193b0',
    textDecoration: 'none',
    wordBreak: 'break-all',
  },
};

export default App;
