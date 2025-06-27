
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUrlData, saveUrl } from '../utils/storage';
import { logEvent } from '../utils/logger';

export default function RedirectHandler() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getUrlData(code);

    if (!data) {
      logEvent('error', `No mapping found for ${code}`);
      alert('URL not found!');
      navigate('/');
      return;
    }

    if (Date.now() > data.expiry) {
      logEvent('error', `Expired link: ${code}`);
      alert('This link has expired!');
      navigate('/');
      return;
    }

    data.visits += 1;
    saveUrl(code, data);
    logEvent('info', `Redirected to ${data.originalUrl}`);
    window.location.href = data.originalUrl;
  }, [code]);

  return <p>Redirecting...</p>;
}
