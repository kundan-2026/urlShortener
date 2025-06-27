
import { useState } from 'react';
import { saveUrl, getUrls } from '../utils/storage';
import { generateShortCode, isValidURL, isAlphanumeric } from '../utils/helpers';
import { logEvent } from '../utils/logger';

export default function ShortenForm() {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [validity, setValidity] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (!isValidURL(url)) {
      alert('Invalid URL!');
      logEvent('error', 'Invalid URL provided.');
      return;
    }

    let shortCode = code.trim() || generateShortCode();
    if (!isAlphanumeric(shortCode)) {
      alert('Shortcode must be alphanumeric.');
      logEvent('error', 'Invalid shortcode format.');
      return;
    }

    const urls = getUrls();
    if (urls[shortCode]) {
      alert('Shortcode already exists!');
      logEvent('error', 'Shortcode already in use.');
      return;
    }

    const expiry = Date.now() + (parseInt(validity) || 30) * 60 * 1000;

    const data = {
      originalUrl: url,
      createdAt: Date.now(),
      visits: 0,
      expiry,
    };

    saveUrl(shortCode, data);
    logEvent('info', `Shortened URL created with code ${shortCode}`);
    setShortUrl(`${window.location.origin}/${shortCode}`);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <input placeholder="Custom shortcode (optional)" value={code} onChange={(e) => setCode(e.target.value)} />
      <input placeholder="Validity in minutes (default 30)" value={validity} onChange={(e) => setValidity(e.target.value)} />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}
