export function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}
