export function saveStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function retrieveStorage(key) {
  const str = localStorage.getItem(key);
  return JSON.parse(str);
}
