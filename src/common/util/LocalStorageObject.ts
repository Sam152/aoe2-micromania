export default class LocalStorageObject<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(defaultValue: T): T {
    try {
      const data = JSON.parse(window.localStorage.getItem(this.key));
      return data || defaultValue;
    } catch (e) {
      window.localStorage.removeItem(this.key);
      return defaultValue;
    }
  }

  set(object: T): void {
    window.localStorage.setItem(this.key, JSON.stringify(object));
  }
}
