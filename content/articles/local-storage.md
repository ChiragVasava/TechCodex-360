# Local storage

`localStorage` is a browser API for origin-scoped string key/value data. It is useful for small preferences that should survive page reloads and ordinary browser restarts. Reads and writes are synchronous.

## Store a preference

Run on an HTTP or HTTPS page that permits storage:

```javascript
const key = 'codex-example-theme';
try {
  localStorage.setItem(key, JSON.stringify({ theme: 'dark' }));
  console.log(JSON.parse(localStorage.getItem(key)).theme);
  localStorage.removeItem(key);
} catch (error) {
  console.log('Storage unavailable:', error.name);
}
```

Expected successful output: `dark`. The example removes only its own demonstration key. In real code, handle missing data, malformed JSON and schema changes when reading records created by an earlier application version.

## Scope and limits

Different origins have separate stores. Storage can be blocked, cleared or quota-limited; a persistent preference is not a guaranteed backup. Avoid fixed cross-browser capacity promises. Large synchronous writes can interrupt UI work.

JavaScript executing in the origin can access these values. Do not use local storage as a password vault. [Cookies](/knowledge/cookies) have separate transmission and protection rules. Choose [session storage](/knowledge/session-storage) for page-session state, or [IndexedDB](/knowledge/indexeddb) for structured asynchronous data.

Reference: [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).
