# Custom elements

Custom elements let JavaScript define behavior for registered HTML element names. An autonomous custom element extends `HTMLElement`; its valid registered name includes a hyphen.

## A minimal element

Run this example once per document:

```javascript
class CodexGreeting extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Hello, engineer';
  }
}
customElements.define('codex-greeting', CodexGreeting);
const greeting = document.createElement('codex-greeting');
document.body.append(greeting);
console.log(greeting.textContent);
greeting.remove();
```

Expected output: `Hello, engineer`.

## Lifecycle and configuration

The example writes content when the element is connected. Other callbacks handle disconnection and observed attribute changes. Setup should tolerate reconnection: avoid accumulating listeners or timers, and clean up resources when appropriate. Keep constructor work small and follow the platform's custom element constructor restrictions.

Calling `customElements.define` again with the same registered name throws. When experimenting in a console, reload the page or use a fresh valid name. A guard with `customElements.get` can avoid duplicate registration but cannot replace an already registered definition.

Custom elements do not require a [shadow tree](/knowledge/shadow-dom). Add one when encapsulated markup is useful, and use [templates](/knowledge/html-templates) when instances share a blueprint. Start with [JavaScript](/knowledge/javascript) classes and [DOM](/knowledge/dom) operations.

Reference: [MDN custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements).
