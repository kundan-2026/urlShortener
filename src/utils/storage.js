
const STORAGE_KEY = 'urlMappings';

export const getUrls = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
};

export const saveUrl = (code, data) => {
  const urls = getUrls();
  urls[code] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
};

export const getUrlData = (code) => {
  const urls = getUrls();
  return urls[code] || null;
};
