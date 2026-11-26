import { emptyWorkspace, validateWorkspace, type WorkspaceData } from "./workspace";

const databaseName = "techcodex-personal-workspace";
const storeName = "workspace";
let connection: Promise<IDBDatabase> | undefined;

function database(): Promise<IDBDatabase> {
  if (typeof indexedDB === "undefined") return Promise.reject(new Error("Browser storage is unavailable. Enable IndexedDB or use a supported browser."));
  if (!connection) connection = new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => { request.result.createObjectStore(storeName); };
    request.onsuccess = () => { request.result.onversionchange = () => { request.result.close(); connection = undefined; }; resolve(request.result); };
    request.onerror = () => { connection = undefined; reject(new Error("Unable to open browser storage. Check browser privacy and storage settings.")); };
    request.onblocked = () => { connection = undefined; reject(new Error("Storage upgrade blocked by another tab. Close other Codex tabs and retry.")); };
  });
  return connection;
}

export async function readWorkspace(): Promise<WorkspaceData> {
  const db = await database();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const request = transaction.objectStore(storeName).get("current");
    request.onsuccess = () => { try { resolve(request.result === undefined ? emptyWorkspace() : validateWorkspace(request.result)); } catch (error) { reject(error); } };
    request.onerror = () => reject(new Error("Unable to read saved workspace."));
  });
}

/** Read/modify/write runs in one IndexedDB transaction, including across browser tabs. */
export async function updateWorkspace(update: (current: WorkspaceData) => WorkspaceData, replace = false): Promise<WorkspaceData> {
  const db = await database();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.get("current");
    let result: WorkspaceData;
    let problem: Error | undefined;
    request.onsuccess = () => {
      try {
        result = validateWorkspace(update(replace || request.result === undefined ? emptyWorkspace() : validateWorkspace(request.result)));
        result.updatedAt = new Date().toISOString();
        store.put(result, "current");
      } catch (error) { problem = error instanceof Error ? error : new Error("Workspace validation failed."); transaction.abort(); }
    };
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(problem ?? new Error("Unable to save workspace. Browser storage may be full or unavailable. Export a backup before clearing browser data."));
    transaction.onabort = () => reject(problem ?? new Error("Save was interrupted. Your previous data is unchanged."));
  });
}
