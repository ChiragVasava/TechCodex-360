# HTML templates and slots

A `template` holds markup that is not rendered as ordinary page content. Its `content` is a DocumentFragment that can be cloned. A `slot` has a different job: it marks an insertion point for light-DOM content in a shadow tree.

## Clone a blueprint

```javascript
const template = document.createElement('template');
template.innerHTML = '<p>Reusable message</p>'; // Trusted fixed markup
const copy = template.content.cloneNode(true);
console.log(template.children.length);
console.log(copy.querySelector('p').textContent);
```

Expected output:

```text
0
Reusable message
```

The paragraph is in the template's content fragment, not its ordinary children. Append the cloned fragment to an element or shadow root to insert the markup. Cloning does not install JavaScript listeners previously attached with `addEventListener`; initialize behavior for each instance.

## Distribute content with a slot

A shadow tree containing `<slot name="title">Untitled</slot>` can display a host's light-DOM child with `slot="title"`. The fallback appears when no assigned content fills that slot. Assignment does not move the supplied node into the shadow root's DOM tree.

Templates are not a sanitizer. Inserting untrusted HTML can introduce unsafe behavior. Use fixed markup and safe text insertion, or a suitable reviewed sanitization boundary.

Connect this to [custom elements](/knowledge/custom-elements), [Shadow DOM](/knowledge/shadow-dom), and [MDN templates and slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots).
