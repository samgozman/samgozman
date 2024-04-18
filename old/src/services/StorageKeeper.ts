/** This is a simple class that will be used to store data in the local storage of the browser. */
interface StorageItem<T> {
  value: T
  // Time value in milliseconds since midnight, January 1, 1970 UTC.
  expiry: number
}

export class StorageKeeper {
  private static readonly PREFIX = 'bloggy-'

  /**
   * Store the value in the local storage of the browser.
   * @param key
   * @param value
   * @param ttl Time to live in milliseconds.
   */
  static set<T>(key: string, value: T, ttl: number): void {
    const item: StorageItem<T> = {
      value,
      expiry: new Date().getTime() + ttl
    }
    localStorage.setItem(this.PREFIX + key, JSON.stringify(item))
  }

  /**
   * Retrieve the value from the local storage of the browser.
   * If the value is expired, it will be removed from the local storage and return `null`.
   */
  static get<T>(key: string): T | null {
    const item = localStorage.getItem(this.PREFIX + key)
    if (!item) {
      return null
    }
    const parsedItem: StorageItem<T> = JSON.parse(item)
    if (parsedItem.expiry < new Date().getTime()) {
      localStorage.removeItem(this.PREFIX + key)
      return null
    }
    return parsedItem.value
  }

  /**
   * Remove the value from the local storage of the browser.
   */
  static remove(key: string): void {
    localStorage.removeItem(this.PREFIX + key)
  }
}
