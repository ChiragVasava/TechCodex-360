# Browser autofill and password managers

Browser autofill fills form fields using browser-managed or password-manager information. That storage is distinct from a website's [cookies](/knowledge/cookies), [local storage](/knowledge/local-storage), [session storage](/knowledge/session-storage) and [IndexedDB](/knowledge/indexeddb).

## Declare a sign-in form

```html
<form method="post" action="/login">
  <label>Username
    <input name="username" autocomplete="username">
  </label>
  <label>Password
    <input name="password" type="password" autocomplete="current-password">
  </label>
  <button>Sign in</button>
</form>
```

The visible result is a labeled sign-in form with a masked password field. `/login` is an example endpoint that requires a real server implementation. Autocomplete values describe the purpose of fields; they do not guarantee that every browser fills them.

## Correct the security explanation

A website has no general API for enumerating a browser's password vault. However, a password input's `value` is available to page JavaScript. Masking characters on screen does not make the value secret from the page, and submission or an input event is not a required gate for reading that property.

Do not log credentials. Use HTTPS, minimize untrusted scripts and defend against script injection. Password-manager encryption, OS integration and user-interaction requirements vary by product; the supplied notes describe them too universally.

Follow [authentication](/knowledge/authentication) and [web security](/knowledge/web-security). References: [password input behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password), [autocomplete attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete).
