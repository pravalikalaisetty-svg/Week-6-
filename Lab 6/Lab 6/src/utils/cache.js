let cache = null;
let lastFetchTime = null;
let fetchAttempts = 0;

export function getCache() {
  return cache;
}

export function setCache(data) {
  cache = data;
  lastFetchTime = new Date();
}

export function getFetchInfo() {
  fetchAttempts++;
  return {
    attempts: fetchAttempts,
    lastFetch: lastFetchTime
  };
}