# Document Object Model

The DOM represents a document as objects and nodes with interfaces that programs can inspect and modify.

## Document, tree and display

HTML source is parsed into a document tree. Elements, text and other nodes become accessible through APIs. The DOM is not the same thing as the original source text or the pixels on screen: scripts can change nodes, and style/layout/painting determine their visual presentation.

[JavaScript](/knowledge/javascript) commonly uses the DOM, but the DOM is an API model rather than part of the JavaScript language.

## Safe content insertion

```javascript
const paragraph = document.createElement("p");
paragraph.textContent = "A user-supplied title";
document.querySelector("main").append(paragraph);
```

Using `textContent` treats the value as text. Interpreting untrusted strings as HTML can introduce script injection; [input validation](/knowledge/input-validation) alone does not replace correct output handling.

## Events and performance

Event listeners respond to user or programmatic events. Dispatch can invoke several listeners according to event propagation rules. Frequent interleaved layout reads and writes may force expensive rendering work.

Workers cannot directly edit the page DOM. They can calculate a result and send it to the page, which applies an update.

## Practice

Create a list, append items with element APIs and handle clicks with one listener on its container. Use a debugger to inspect the clicked node and propagation. Assessment: explain why a DOM mutation does not mean the browser has already painted a frame. Continue with the [event loop](/knowledge/event-loop) and [Web Workers](/knowledge/web-workers).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) — MDN Web Docs.

