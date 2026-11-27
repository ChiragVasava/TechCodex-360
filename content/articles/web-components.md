# Web Components

Web Components describes a set of browser technologies for reusable elements and encapsulated UI. The technologies cooperate, but an application does not have to use every one of them together.

## Responsibilities

| Technology | Job | Canonical explanation |
| --- | --- | --- |
| Custom elements | Register element behavior and lifecycle callbacks | [Custom elements](/knowledge/custom-elements) |
| Shadow DOM | Provide a scoped internal node tree | [Shadow DOM](/knowledge/shadow-dom) |
| Templates | Hold reusable, initially inert markup | [HTML templates](/knowledge/html-templates) |
| Slots | Place supplied light-DOM content within a shadow tree's rendering | [Templates and slots](/knowledge/html-templates) |

A notification component can register a `codex-notice` element, clone a template into its shadow root, and expose a slot for the caller's message. The caller supplies the content; the component owns its internal structure.

## Practical learning sequence

First build an element that displays fixed text. Next add an observed attribute and update only the affected content. Finally add a slot, keyboard behavior and a documented styling interface. Test removal and reinsertion: lifecycle callbacks can run more than once.

## Boundaries

A custom tag does not automatically acquire accessible semantics. Use appropriate native controls and test focus and screen-reader behavior. Shadow DOM is not a sandbox for untrusted JavaScript. Compare component design choices with [React](/knowledge/react) without treating browser APIs and a UI library as interchangeable implementations.

Reference: [custom element lifecycle and registration](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements).
