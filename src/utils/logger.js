
const logs = [];

export const logEvent = (type, message) => {
  const timestamp = new Date().toISOString();
  logs.push({ type, message, timestamp });
};

export const getLogs = () => [...logs];
