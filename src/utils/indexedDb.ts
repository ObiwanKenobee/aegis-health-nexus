
// Basic IndexedDB utility for offline data storage
export interface DBConfig {
  name: string;
  version: number;
  stores: Array<{
    name: string;
    keyPath: string;
    indexes?: Array<{ name: string; keyPath: string; options?: IDBIndexParameters }>;
  }>;
}

export class IndexedDBService {
  private db: IDBDatabase | null = null;
  private config: DBConfig;

  constructor(config: DBConfig) {
    this.config = config;
  }

  async connect(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.config.name, this.config.version);

      request.onerror = () => {
        console.error('Failed to connect to IndexedDB');
        reject(new Error('Failed to connect to IndexedDB'));
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('Connected to IndexedDB');
        resolve(true);
      };

      request.onupgradeneeded = (event) => {
        const db = request.result;
        
        // Create object stores based on config
        this.config.stores.forEach(store => {
          if (!db.objectStoreNames.contains(store.name)) {
            const objectStore = db.createObjectStore(store.name, { keyPath: store.keyPath });
            
            // Create indexes if defined
            store.indexes?.forEach(index => {
              objectStore.createIndex(index.name, index.keyPath, index.options);
            });
          }
        });
      };
    });
  }

  async add<T>(storeName: string, data: T): Promise<IDBValidKey> {
    return this.runTransaction(storeName, 'readwrite', (store) => {
      return store.add(data);
    });
  }

  async put<T>(storeName: string, data: T): Promise<IDBValidKey> {
    return this.runTransaction(storeName, 'readwrite', (store) => {
      return store.put(data);
    });
  }

  async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    return this.runTransaction(storeName, 'readonly', (store) => {
      return store.get(key);
    });
  }

  async getAll<T>(storeName: string): Promise<T[]> {
    return this.runTransaction(storeName, 'readonly', (store) => {
      return store.getAll();
    });
  }

  async delete(storeName: string, key: IDBValidKey): Promise<void> {
    return this.runTransaction(storeName, 'readwrite', (store) => {
      return store.delete(key);
    });
  }

  async clear(storeName: string): Promise<void> {
    return this.runTransaction(storeName, 'readwrite', (store) => {
      return store.clear();
    });
  }

  async count(storeName: string): Promise<number> {
    return this.runTransaction(storeName, 'readonly', (store) => {
      return store.count();
    });
  }

  private async runTransaction<T>(
    storeName: string, 
    mode: IDBTransactionMode, 
    operation: (store: IDBObjectStore) => IDBRequest
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not connected'));
        return;
      }

      try {
        const transaction = this.db.transaction(storeName, mode);
        const store = transaction.objectStore(storeName);
        const request = operation(store);

        request.onsuccess = () => {
          resolve(request.result as T);
        };

        request.onerror = () => {
          reject(request.error);
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}

// Create and export a single instance for the health app
export const healthDB = new IndexedDBService({
  name: 'AEGISHealthDB',
  version: 1,
  stores: [
    {
      name: 'syncQueue',
      keyPath: 'id',
      indexes: [
        { name: 'timestamp', keyPath: 'timestamp' },
        { name: 'type', keyPath: 'type' }
      ]
    },
    {
      name: 'healthData',
      keyPath: 'id',
      indexes: [
        { name: 'timestamp', keyPath: 'timestamp' },
        { name: 'type', keyPath: 'type' },
        { name: 'syncStatus', keyPath: 'syncStatus' }
      ]
    },
    {
      name: 'userPreferences',
      keyPath: 'id'
    }
  ]
});
