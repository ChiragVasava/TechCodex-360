# Session storage

`sessionStorage` provides string key/value storage partitioned by origin and top-level browsing context. It is suited to temporary state such as a multi-step form in one tab.

## Follow a page session

```javascript
const key = 'codex-example-step';
try {
  sessionStorage.setItem(key, '2');
  console.log(sessionStorage.getItem(key));
  sessionStorage.removeItem(key);
} catch (error) {
  console.log('Storage unavailable:', error.name);
}
```

Expected successful output: `2`. The value is a string even though it looks numeric. The demonstration removes its own key; omit that removal on a disposable test page to observe persistence across reloads.

## Correct the new-tab assumption

The supplied research says that a new tab always starts fresh. A page with an opener can receive an initial copy of its opener's session storage. The copies are separate afterward. Reloads and page-session restores can preserve the data; do not use tab closure as a security-sensitive deletion guarantee.

Storage policy can deny access or exhaust the quota. Catch failures and provide a fallback appropriate to the workflow. Session storage remains readable by scripts executing in the origin and is not protected merely because it is temporary.

Compare [local storage](/knowledge/local-storage), [cookies](/knowledge/cookies) and [browser storage](/knowledge/browser-storage). Reference: [MDN sessionStorage lifecycle and opener behavior](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
