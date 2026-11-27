# DOM selection methods

In `document.getElementById('header')`, `document` is the current page's Document object; `getElementById` is a method; `'header'` is its argument. The dot accesses an object member, and the parentheses call the function.

## Choose the result you need

| Call | Result | Missing match |
| --- | --- | --- |
| `document.getElementById('header')` | Element | `null` |
| `document.querySelector('.card')` | First matching Element | `null` |
| `document.querySelectorAll('p')` | Static NodeList | Empty list |
| `document.getElementsByClassName('item')` | Live HTMLCollection | Empty collection |

An Element also has `querySelector` and `querySelectorAll`, which search its descendants. Document queries do not cross [shadow roots](/knowledge/shadow-dom). A selector with invalid syntax can throw instead of returning an empty result.

## A snapshot is not a live collection

```javascript
const group = document.createElement('div');
group.innerHTML = '<p>First</p>'; // Fixed example markup only
const snapshot = group.querySelectorAll('p');
const live = group.getElementsByTagName('p');
group.append(document.createElement('p'));
console.log(snapshot.length, live.length);
```

Expected output: `1 2`. The snapshot retains its original membership; the live collection reflects the added node. Neither result is an ordinary Array, although `Array.from(collection)` can create one.

Check for `null` before using a single match. Prefer `textContent` for untrusted text rather than interpolating it into HTML. Continue with the [DOM](/knowledge/dom) and [input validation](/knowledge/input-validation). Reference: [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).
