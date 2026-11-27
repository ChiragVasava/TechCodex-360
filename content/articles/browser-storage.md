# Browser storage

## Choosing and writing storage

| Mechanism | Application operation | Main distinction |
| --- | --- | --- |
| [Cookies](/knowledge/cookies) | Server Set-Cookie or document.cookie | Eligible requests carry matching cookies under browser policy |
| [Local storage](/knowledge/local-storage) | setItem and getItem | Synchronous string preferences |
| [Session storage](/knowledge/session-storage) | setItem and getItem | Origin plus top-level page-session scope |
| [IndexedDB](/knowledge/indexeddb) | Open, transaction, object-store request | Asynchronous structured records |

There is no single built-in API that automatically chooses between these. An application wrapper must implement each supported mechanism and reject unsupported choices. The supplied research wrapper leaves IndexedDB unimplemented; use the complete transaction example in its article.

Browser-managed caches, history and [password-manager autofill](/knowledge/browser-autofill) are different facilities. Quotas and retention vary, and saved data may be cleared. A new tab can initially copy its opener's session storage, so it is not always empty.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 1473–1572](/research?document=interview&start=1473&end=1572). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Browser Storage

**Q1.115. What is browser storage?**

Answer: Browser storage refers to the mechanisms that allow web applications to store data on the user's device.

Common browser storage mechanisms include:

- Cookies.
- Local Storage.
- Session Storage.
- IndexedDB.

For example, a task management application can use Local Storage to remember tasks after the user refreshes the page.

**Q1.116. What is Local Storage?**

Answer: Local Storage is a browser storage mechanism that stores key-value pairs as strings and keeps the data even after the browser is closed and reopened.

It does not automatically expire.

Example:

```javascript
localStorage.setItem("name", "Chirag");

const name = localStorage.getItem("name");
```

It is useful for storing non-sensitive preferences and simple application data.

**Q1.117. What is Session Storage?**

Answer: Session Storage stores key-value pairs for a particular browser tab's session.

The data normally remains available when the page is refreshed but is cleared when that tab's page session ends.

For example, we can temporarily store information about a multi-step form.

**Q1.118. What are cookies?**

Answer: Cookies are small pieces of data stored by the browser and associated with a website.

They are commonly used for session management, authentication and user preferences.

Unlike Local Storage, cookies can be automatically included in matching HTTP requests.

**Q1.119. What is the difference between Local Storage, Session Storage and Cookies?**

Answer:

| Feature                               | Local Storage                                     | Session Storage                | Cookies                        |
| ------------------------------------- | ------------------------------------------------- | ------------------------------ | ------------------------------ |
| Lifetime                              | Until removed                                     | Usually until tab session ends | Depends on expiration settings |
| Capacity                              | Usually around 5 MB or more, depending on browser | Usually around 5 MB            | Usually around 4 KB per cookie |
| Sent automatically with HTTP requests | No                                                | No                             | Yes, when applicable           |
| Scope                                 | Origin                                            | Origin and tab session         | Depends on domain and path     |
| Common use                            | Preferences                                       | Temporary form data            | Sessions and authentication    |

Interview point: Sensitive authentication cookies should generally use `HttpOnly`, `Secure` and appropriate `SameSite` settings.

**Q1.120. How do you create, read and delete cookies using JavaScript?**

Answer: JavaScript provides the `document.cookie` property to work with cookies that are accessible to JavaScript.

Example:

```javascript
// Create
document.cookie = "user=Chirag; path=/";

// Read
console.log(document.cookie);

// Delete
document.cookie =
  "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

JavaScript cannot read cookies marked as `HttpOnly`. This is an important security feature.

**Q1.121. What is IndexedDB?**

Answer: IndexedDB is a browser database that allows applications to store larger amounts of structured data locally.

Unlike Local Storage, it supports objects, indexes and asynchronous database operations.

For example, an offline application can use IndexedDB to store records that users can access without an internet connection.

**Q1.122. What is the difference between Local Storage and IndexedDB?**

Answer:

- Local Storage: Simple synchronous key-value storage that stores strings.
- IndexedDB: Asynchronous browser database that supports structured data, indexes and larger datasets.

Local Storage is suitable for simple preferences, while IndexedDB is more suitable for complex offline application data.

---

> Imported lesson from [Browser rendering, Web Components and storage, lines 166–291](/research?document=browser-notes&start=166&end=291). Needs review: examples and claims retain their source context; reading does not certify proficiency.

This plain-text research passage is preserved in the [browser research collection](/study). Read the connected canonical articles for explanations with corrections; the source export is not independently verified.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
