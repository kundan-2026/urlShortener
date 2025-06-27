
import { getUrls } from '../utils/storage';

export default function UrlStats() {
  const urls = getUrls();

  return (
    <div>
      <h2>URL Statistics</h2>
      <ul>
        {Object.entries(urls).map(([code, data]) => (
          <li key={code}>
            <p><strong>{code}</strong> → {data.originalUrl}</p>
            <p>Visits: {data.visits}</p>
            <p>Expires: {new Date(data.expiry).toLocaleString()}</p>
            <a href={`/${code}`}>Visit</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
