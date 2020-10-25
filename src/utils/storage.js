export default class LocalStorage {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    const strData = localStorage.getItem(key);
    return JSON.parse(strData);
  }
}
