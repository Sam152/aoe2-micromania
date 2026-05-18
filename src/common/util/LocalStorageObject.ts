export default class LocalStorageObject<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(defaultValue: T): T {
    try {
      const data = JSON.parse(globalThis.localStorage.getItem(this.key)!);
      return data || defaultValue;
    } catch {
      globalThis.localStorage.removeItem(this.key);
      return defaultValue;
    }
  }

  set(object: T): void {
    globalThis.localStorage.setItem(this.key, JSON.stringify(object));
  }
}
